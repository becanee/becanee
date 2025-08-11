import { NextRequest, NextResponse } from 'next/server'
import { getCollectionBySlug } from '@/app/reqs/collections'

/**
 * Dynamic API route untuk proxy ke external API
 * @param request - Next.js request object
 * @param params - Route parameters containing slug
 * @returns Standardized API response
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    
    // Fetch API details dari database
    const apiDetails = await getCollectionBySlug(slug)
    
    if (!apiDetails) {
      return NextResponse.json(
        {
          httpCode: 404,
          author: "becaneee.xyz",
          msg: `API '${slug}' not found`,
          api_details: {
            name: null,
            category: null,
            version: null
          }
        },
        { status: 404 }
      )
    }

    // Check if provider URL exists
    if (!apiDetails.provider) {
      return NextResponse.json(
        {
          httpCode: 500,
          author: "becaneee.xyz",
          api_details: {
            name: apiDetails.name,
            category: apiDetails.category,
            version: apiDetails.version
          },
          msg: `Provider URL not configured for ${apiDetails.name}`
        },
        { status: 500 }
      )
    }

    // Parameter validation - cek required parameters
    const url = new URL(request.url)
    const queryParams = Object.fromEntries(url.searchParams.entries())
    
    // Get required parameters from database
    const requiredParams = apiDetails.parameters?.filter(param => param.required) || []
    
    // Check if all required parameters are present
    const missingParams = requiredParams.filter(param => !queryParams[param.name])
    
    if (missingParams.length > 0) {
      const missingParamNames = missingParams.map(param => `?${param.name}=`).join(', ')
      return NextResponse.json(
        {
          httpCode: 401,
          author: "becaneee.xyz",
          api_details: {
            name: apiDetails.name,
            category: apiDetails.category,
            version: apiDetails.version
          },
          msg: `failed parameter ${missingParamNames} is required`
        },
        { status: 401 }
      )
    }

    // Dynamic URL construction berdasarkan format provider
    let externalUrl: string
    
    if (apiDetails.provider.includes('[') && apiDetails.provider.includes(']')) {
      // Format dengan placeholder [parameter]
      let constructedUrl = apiDetails.provider
      
      // Replace semua placeholder dengan nilai parameter
      Object.entries(queryParams).forEach(([key, value]) => {
        const placeholder = `[${key}]`
        if (constructedUrl.includes(placeholder)) {
          constructedUrl = constructedUrl.replace(placeholder, value)
        }
      })
      
      externalUrl = constructedUrl
    } else {
      // Format traditional query parameters
      const urlObj = new URL(apiDetails.provider)
      Object.entries(queryParams).forEach(([key, value]) => {
        urlObj.searchParams.append(key, value)
      })
      externalUrl = urlObj.toString()
    }

    // Proxy ke external API
    const externalResponse = await fetch(externalUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Public-APIs-Platform/1.0'
      }
    })

    if (!externalResponse.ok) {
      return NextResponse.json(
        {
          httpCode: 500,
          author: "becaneee.xyz",
          api_details: {
            name: apiDetails.name,
            category: apiDetails.category,
            version: apiDetails.version
          },
          msg: `failed fetch ${apiDetails.name}, please contact author`
        },
        { status: 500 }
      )
    }

    // Parse external API response
    const externalData = await externalResponse.json()

    // Return standardized success response
    return NextResponse.json(
      {
        httpCode: 200,
        author: "becaneee.xyz",
        msg: "success",
        api_details: {
          name: apiDetails.name,
          category: apiDetails.category,
          version: apiDetails.version
        },
        data: externalData
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API Route Error:', error)
    
    return NextResponse.json(
      {
        httpCode: 500,
        author: "becaneee.xyz",
        api_details: {
          name: "Unknown",
          category: "Unknown", 
          version: "Unknown"
        },
        msg: "Internal server error"
      },
      { status: 500 }
    )
  }
}

/**
 * Handle other HTTP methods
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  return NextResponse.json(
    {
      httpCode: 405,
      author: "becaneee.xyz",
      msg: "Method not allowed"
    },
    { status: 405 }
  )
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  return NextResponse.json(
    {
      httpCode: 405,
      author: "becaneee.xyz",
      msg: "Method not allowed"
    },
    { status: 405 }
  )
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  return NextResponse.json(
    {
      httpCode: 405,
      author: "becaneee.xyz",
      msg: "Method not allowed"
    },
    { status: 405 }
  )
}
