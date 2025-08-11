"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { insertTestData, getAllCollections, getCollectionBySlug } from "@/app/reqs/collections"

export default function TestDbPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleInsertTestData = async () => {
    try {
      setLoading(true)
      setError(null)
      await insertTestData()
      setResult("Test data inserted successfully!")
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const handleGetAllCollections = async () => {
    try {
      setLoading(true)
      setError(null)
      const collections = await getAllCollections()
      setResult(collections)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const handleGetCollectionBySlug = async () => {
    try {
      setLoading(true)
      setError(null)
      const collection = await getCollectionBySlug("user-management-api")
      setResult(collection)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Database Test Page</h2>
        <p className="text-muted-foreground">
          Test database operations untuk Checkpoint 7
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Insert Test Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleInsertTestData} 
              disabled={loading}
              className="w-full"
            >
              {loading ? "Inserting..." : "Insert Test Data"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Get All Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleGetAllCollections} 
              disabled={loading}
              className="w-full"
            >
              {loading ? "Fetching..." : "Fetch All Collections"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Get Collection by Slug</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleGetCollectionBySlug} 
              disabled={loading}
              className="w-full"
            >
              {loading ? "Fetching..." : "Fetch by Slug"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {error && (
        <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
          <CardHeader>
            <CardTitle className="text-red-600 dark:text-red-400">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
