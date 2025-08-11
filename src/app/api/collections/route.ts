import { NextRequest, NextResponse } from 'next/server'
import { getAllCollections } from '@/app/reqs/collections'

/**
 * API route untuk mendapatkan list semua collections
 * @param request - Next.js request object
 * @returns List semua API collections
 */
export async function GET(request: NextRequest) {
  try {
    const collections = await getAllCollections()
    
    return NextResponse.json(
      {
        httpCode: 200,
        author: "becaneee.xyz",
        msg: "success",
        data: collections.map(collection => ({
          slug: collection.slug,
          name: collection.name,
          description: collection.description,
          category: collection.category,
          version: collection.version,
          status: collection.status,
          endpoint: `/api/${collection.slug}`
        }))
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Collections API Error:', error)
    
    return NextResponse.json(
      {
        httpCode: 500,
        author: "becaneee.xyz",
        msg: "Failed to fetch collections"
      },
      { status: 500 }
    )
  }
}

/**
 * Handle other HTTP methods
 */
export async function POST(request: NextRequest) {
  return NextResponse.json(
    {
      httpCode: 405,
      author: "becaneee.xyz",
      msg: "Method not allowed"
    },
    { status: 405 }
  )
}

export async function PUT(request: NextRequest) {
  return NextResponse.json(
    {
      httpCode: 405,
      author: "becaneee.xyz",
      msg: "Method not allowed"
    },
    { status: 405 }
  )
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json(
    {
      httpCode: 405,
      author: "becaneee.xyz",
      msg: "Method not allowed"
    },
    { status: 405 }
  )
}
