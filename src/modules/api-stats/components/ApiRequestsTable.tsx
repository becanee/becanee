"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IconClock, IconCode, IconWorldWww, IconRefresh } from "@tabler/icons-react"

interface ApiRequest {
  id: string
  endpoint: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  status: "successful" | "failed" | "rateLimited"
  responseTime: number
  timestamp: string
  ipAddress: string
  userAgent: string
  apiKey?: string
}

// Mock data untuk last 10 fetch API
const mockApiRequests: ApiRequest[] = [
  {
    id: "1",
    endpoint: "/api/users",
    method: "GET",
    status: "successful",
    responseTime: 45,
    timestamp: "2024-01-15T10:30:00Z",
    ipAddress: "192.168.1.100",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    apiKey: "sk_abc123..."
  },
  {
    id: "2",
    endpoint: "/api/products",
    method: "POST",
    status: "successful",
    responseTime: 78,
    timestamp: "2024-01-15T10:28:00Z",
    ipAddress: "203.45.67.89",
    userAgent: "PostmanRuntime/7.32.3",
    apiKey: "sk_def456..."
  },
  {
    id: "3",
    endpoint: "/api/orders",
    method: "GET",
    status: "rateLimited",
    responseTime: 120,
    timestamp: "2024-01-15T10:25:00Z",
    ipAddress: "45.67.89.123",
    userAgent: "curl/7.88.1",
    apiKey: "sk_ghi789..."
  },
  {
    id: "4",
    endpoint: "/api/auth/login",
    method: "POST",
    status: "failed",
    responseTime: 95,
    timestamp: "2024-01-15T10:22:00Z",
    ipAddress: "98.76.54.32",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    apiKey: undefined
  },
  {
    id: "5",
    endpoint: "/api/analytics",
    method: "GET",
    status: "successful",
    responseTime: 62,
    timestamp: "2024-01-15T10:20:00Z",
    ipAddress: "111.222.333.444",
    userAgent: "Python-requests/2.31.0",
    apiKey: "sk_jkl012..."
  },
  {
    id: "6",
    endpoint: "/api/webhooks",
    method: "POST",
    status: "successful",
    responseTime: 88,
    timestamp: "2024-01-15T10:18:00Z",
    ipAddress: "55.66.77.88",
    userAgent: "GitHub-Hookshot/1234567",
    apiKey: "sk_mno345..."
  },
  {
    id: "7",
    endpoint: "/api/files/upload",
    method: "POST",
    status: "failed",
    responseTime: 150,
    timestamp: "2024-01-15T10:15:00Z",
    ipAddress: "22.33.44.55",
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
    apiKey: "sk_pqr678..."
  },
  {
    id: "8",
    endpoint: "/api/search",
    method: "GET",
    status: "successful",
    responseTime: 35,
    timestamp: "2024-01-15T10:12:00Z",
    ipAddress: "77.88.99.111",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)",
    apiKey: "sk_stu901..."
  },
  {
    id: "9",
    endpoint: "/api/notifications",
    method: "PUT",
    status: "rateLimited",
    responseTime: 110,
    timestamp: "2024-01-15T10:10:00Z",
    ipAddress: "33.44.55.66",
    userAgent: "Mozilla/5.0 (Android 13; Mobile; rv:109.0)",
    apiKey: "sk_vwx234..."
  },
  {
    id: "10",
    endpoint: "/api/health",
    method: "GET",
    status: "successful",
    responseTime: 12,
    timestamp: "2024-01-15T10:08:00Z",
    ipAddress: "44.55.66.77",
    userAgent: "UptimeRobot/2.0",
    apiKey: undefined
  }
]

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
    case "successful": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "failed": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "rateLimited": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

function formatRelativeTime(timestamp: string) {
  const now = new Date()
  const time = new Date(timestamp)
  const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000)
  
  if (diffInSeconds < 60) return `${diffInSeconds}s ago`
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  return `${Math.floor(diffInSeconds / 86400)}d ago`
}

export function ApiRequestsTable() {
  const [isRefreshing, setIsRefreshing] = React.useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulasi refresh data
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsRefreshing(false)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold">Recent API Requests</CardTitle>
          <CardDescription>
            Last 10 API fetch requests with detailed information
          </CardDescription>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          <IconRefresh className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Endpoint</TableHead>
                <TableHead className="w-[100px]">Method</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[120px]">Response Time</TableHead>
                <TableHead className="w-[120px]">Timestamp</TableHead>
                <TableHead className="w-[140px]">IP Address</TableHead>
                <TableHead className="w-[200px]">API Key</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockApiRequests.map((request) => (
                <TableRow key={request.id}>
                                                <TableCell className="font-mono text-sm">
                                <div className="flex items-center gap-2">
                                  <IconWorldWww className="h-4 w-4 text-muted-foreground" />
                                  {request.endpoint}
                                </div>
                              </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getMethodColor(request.method)}>
                      {request.method}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <IconClock className="h-3 w-3 text-muted-foreground" />
                      <span className="font-mono">{request.responseTime}ms</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <IconCode className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {formatRelativeTime(request.timestamp)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {request.ipAddress}
                  </TableCell>
                  <TableCell>
                    {request.apiKey ? (
                      <span className="font-mono text-xs text-muted-foreground">
                        {request.apiKey.substring(0, 8)}...
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">No API Key</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
