"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { IconArrowLeft, IconWorldWww, IconTag, IconClock, IconKey, IconCode, IconFileDescription } from "@tabler/icons-react"
import Link from "next/link"
import { useApiDocs, ApiDocs } from "@/hooks/use-api-docs"
import { CodeBlock } from "./components/CodeBlock"

interface ApiDocsPageProps {
  slug: string
}

export default function ApiDocsPage({ slug }: ApiDocsPageProps) {
  console.log('🎯 ApiDocsPage rendered with slug:', slug)
  
  const { apiDocs, isLoading, error } = useApiDocs(slug)
  
  console.log('📊 Hook result:', { apiDocs, isLoading, error })

  if (isLoading) {
    console.log('⏳ Showing loading state')
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-muted-foreground">Loading documentation...</div>
      </div>
    )
  }

  if (!apiDocs) {
    console.log('❌ Showing not found state')
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-muted-foreground mb-2">Documentation not found</div>
        <p className="text-sm text-muted-foreground mb-4">
          The API documentation you're looking for doesn't exist.
        </p>
        <p className="text-xs text-muted-foreground mb-4">
          Slug: {slug} | Error: {error || 'None'}
        </p>
        <Link href="/api-collections">
          <Badge variant="outline" className="cursor-pointer">
            <IconArrowLeft className="h-4 w-4 mr-2" />
            Back to Collections
          </Badge>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/api-collections">
          <Badge variant="outline" className="cursor-pointer">
            <IconArrowLeft className="h-4 w-4 mr-2" />
            Back to Collections
          </Badge>
        </Link>
      </div>

      {/* API Info */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{apiDocs.name}</h1>
            <p className="text-muted-foreground text-base sm:text-lg">{apiDocs.description}</p>
          </div>
          <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
            <Badge variant="secondary" className="text-sm">
              {apiDocs.status}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {apiDocs.version}
            </Badge>
          </div>
        </div>

        {/* API Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">API Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <IconWorldWww className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Endpoint</p>
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                    {apiDocs.endpoint}
                  </code>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconTag className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Category</p>
                  <p className="text-sm text-muted-foreground">{apiDocs.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconClock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Base URL</p>
                  <p className="text-sm text-muted-foreground">{apiDocs.baseUrl}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconKey className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Authentication</p>
                  <p className="text-sm text-muted-foreground">{apiDocs.authentication}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Response Example */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconFileDescription className="h-5 w-5" />
          <h2 className="text-2xl font-bold tracking-tight">Response Example</h2>
        </div>
        <CodeBlock
          language="JSON"
          code={apiDocs.responseExample}
          title="Response"
        />
      </div>

      <Separator />

      {/* Code Examples */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <IconCode className="h-5 w-5" />
          <h2 className="text-2xl font-bold tracking-tight">Code Examples</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-6 lg:space-y-8">
            <CodeBlock
              language="JavaScript"
              code={apiDocs.codeExamples.javascript}
              title="JavaScript"
            />
            <CodeBlock
              language="Python"
              code={apiDocs.codeExamples.python}
              title="Python"
            />
          </div>
          <div className="space-y-6 lg:space-y-8">
            <CodeBlock
              language="Golang"
              code={apiDocs.codeExamples.golang}
              title="Golang"
            />
            <CodeBlock
              language="PHP"
              code={apiDocs.codeExamples.php}
              title="PHP"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
