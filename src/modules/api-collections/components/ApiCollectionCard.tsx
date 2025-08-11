"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IconExternalLink, IconCode, IconTag, IconClock, IconWorldWww } from "@tabler/icons-react"
import Link from "next/link"
import { ApiCollection } from "@/hooks/use-api-collections"

interface ApiCollectionCardProps {
  api: ApiCollection
}

function getMethodColor(method: string) {
  switch (method) {
    case "GET": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "POST": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "PUT": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "DELETE": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "PATCH": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "beta": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "deprecated": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export function ApiCollectionCard({ api }: ApiCollectionCardProps) {
  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {api.name}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
              {api.description}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge variant="secondary" className={getStatusColor(api.status)}>
              {api.status}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {api.version}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Endpoint */}
        <div className="flex items-center gap-2">
          <IconWorldWww className="h-4 w-4 text-muted-foreground" />
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className={getMethodColor(api.method)}>
              {api.method}
            </Badge>
            <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
              {api.endpoint}
            </code>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2">
          <IconTag className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{api.category}</span>
        </div>

        {/* Rate Limit */}
        {/* <div className="flex items-center gap-2">
          <IconClock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{api.rateLimit}</span>
        </div> */}

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {api.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {api.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{api.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        <div className="flex w-full gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            asChild
          >
            <Link href={`/api-docs/${api.id}`}>
              <IconCode className="h-4 w-4 mr-2" />
              Docs
            </Link>
          </Button>
          {/* <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => window.open(api.documentation, '_blank')}
          >
            <IconExternalLink className="h-4 w-4 mr-2" />
            Try API
          </Button> */}
        </div>
      </CardFooter>
    </Card>
  )
}
