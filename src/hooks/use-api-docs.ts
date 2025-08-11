/**
 * Func: Hook untuk mengelola data dokumentasi API dengan code examples dari database
 * Created At: Senin, Januari 15th 2025, 11:00 am
 * Created By: becaneee.xyz
 * @param slug - Slug API untuk mendapatkan dokumentasi spesifik
 * @returns Object berisi data dokumentasi API dan code examples
 */

import { useState, useEffect } from "react"
import { getCollectionBySlug, CollectionData, insertTestData } from "@/app/reqs/collections"
import { ApiCollection } from "./use-api-collections"

export interface ApiDocs {
  id: string
  name: string
  description: string
  category: string
  endpoint: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  status: "active" | "beta" | "deprecated"
  version: string
  documentation: string
  rateLimit: string
  tags: string[]
  baseUrl: string
  authentication: string
  codeExamples: {
    javascript: string
    golang: string
    python: string
    php: string
  }
  parameters?: {
    name: string
    type: string
    required: boolean
    description: string
  }[]
  responseExample: string
}

// Mock data sebagai fallback
const mockApiDocs: Record<string, ApiDocs> = {
  "user-management-api": {
    id: "user-management-api",
    name: "User Management API",
    description: "Comprehensive API untuk mengelola data pengguna dengan fitur CRUD lengkap",
    category: "Authentication",
    endpoint: "/api/v1/users",
    method: "GET",
    status: "active",
    version: "v1.0",
    documentation: "/api-docs/user-management-api",
    rateLimit: "1000 requests/hour",
    tags: ["users", "authentication", "crud"],
    baseUrl: "https://api.example.com",
    authentication: "Bearer Token",
    codeExamples: {
      javascript: `// JavaScript (Fetch API)
const response = await fetch('https://api.example.com/api/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`,
      golang: `// Golang
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &http.Client{}
    req, _ := http.NewRequest("GET", "https://api.example.com/api/v1/users", nil)
    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Add("Content-Type", "application/json")
    
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()
    
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
      python: `# Python (requests)
import requests

url = "https://api.example.com/api/v1/users"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
data = response.json()
print(data)`,
      php: `<?php
// PHP (cURL)
$url = 'https://api.example.com/api/v1/users';
$headers = [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
print_r($data);
?>`
    },
    parameters: [
      {
        name: "page",
        type: "integer",
        required: false,
        description: "Nomor halaman untuk pagination"
      },
      {
        name: "limit",
        type: "integer",
        required: false,
        description: "Jumlah item per halaman (max 100)"
      },
      {
        name: "search",
        type: "string",
        required: false,
        description: "Kata kunci pencarian"
      }
    ],
    responseExample: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}`
  },
  "product-catalog-api": {
    id: "product-catalog-api",
    name: "Product Catalog API",
    description: "API untuk mengelola katalog produk dengan fitur pencarian dan filter",
    category: "Data Management",
    endpoint: "/api/v1/products",
    method: "POST",
    status: "active",
    version: "v1.2",
    documentation: "/api-docs/product-catalog-api",
    rateLimit: "2000 requests/hour",
    tags: ["products", "catalog", "search"],
    baseUrl: "https://api.example.com",
    authentication: "API Key",
    codeExamples: {
      javascript: `// JavaScript (Axios)
import axios from 'axios';

const response = await axios.post('https://api.example.com/api/v1/products', {
  name: 'New Product',
  price: 99.99,
  category: 'electronics'
}, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

console.log(response.data);`,
      golang: `// Golang
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    data := map[string]interface{}{
        "name": "New Product",
        "price": 99.99,
        "category": "electronics",
    }
    
    jsonData, _ := json.Marshal(data)
    
    req, _ := http.NewRequest("POST", "https://api.example.com/api/v1/products", bytes.NewBuffer(jsonData))
    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Add("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()
    
    var result map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&result)
    fmt.Println(result)
}`,
      python: `# Python (requests)
import requests
import json

url = "https://api.example.com/api/v1/products"
data = {
    "name": "New Product",
    "price": 99.99,
    "category": "electronics"
}
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, json=data, headers=headers)
result = response.json()
print(result)`,
      php: `<?php
// PHP (Guzzle)
require 'vendor/autoload.php';

use GuzzleHttp\\Client;

$client = new Client();
$response = $client->post('https://api.example.com/api/v1/products', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY',
        'Content-Type' => 'application/json'
    ],
    'json' => [
        'name' => 'New Product',
        'price' => 99.99,
        'category' => 'electronics'
    ]
]);

$data = json_decode($response->getBody(), true);
print_r($data);
?>`
    },
    parameters: [
      {
        name: "name",
        type: "string",
        required: true,
        description: "Nama produk"
      },
      {
        name: "price",
        type: "number",
        required: true,
        description: "Harga produk"
      },
      {
        name: "category",
        type: "string",
        required: false,
        description: "Kategori produk"
      }
    ],
    responseExample: `{
  "success": true,
  "data": {
    "id": 123,
    "name": "New Product",
    "price": 99.99,
    "category": "electronics",
    "created_at": "2024-01-15T10:30:00Z"
  }
}`
  }
}

export function useApiDocs(slug: string) {
  const [apiDocs, setApiDocs] = useState<ApiDocs | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch data dari database dengan fallback ke mock data
  const fetchApiDocs = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('🔍 Fetching API docs for slug:', slug)
      
      // Try database first
      const dbData = await getCollectionBySlug(slug)
      console.log('🗄️ Database response for slug:', slug, dbData)
      
      if (dbData) {
        console.log('✅ Using database data:', dbData)
        // Transform CollectionData to ApiDocs
        const transformedData: ApiDocs = {
          id: dbData.id,
          name: dbData.name,
          description: dbData.description,
          category: dbData.category,
          endpoint: dbData.endpoint,
          method: "GET" as const, // Default method
          status: dbData.status as "active" | "beta" | "deprecated",
          version: dbData.version,
          documentation: `/api-docs/${dbData.slug}`,
          rateLimit: dbData.rate_limit,
          tags: [dbData.category, "public-api"],
          baseUrl: dbData.base_url,
          authentication: dbData.authentication,
          codeExamples: dbData.code_examples,
          parameters: dbData.parameters,
          responseExample: typeof dbData.response_example === 'string' 
            ? dbData.response_example 
            : JSON.stringify(dbData.response_example, null, 2)
        }
        setApiDocs(transformedData)
      } else {
        console.log('📋 Database empty, checking mock data keys:', Object.keys(mockApiDocs))
        // Fallback ke mock data
        const mockData = mockApiDocs[slug]
        console.log('🎭 Mock data found for slug:', slug, mockData)
        
        if (mockData) {
          console.log('✅ Using mock data:', mockData)
          setApiDocs(mockData)
        } else {
          console.log('❌ No data found for slug:', slug)
          setApiDocs(null)
        }
      }
    } catch (err) {
      console.error('❌ Error in useApiDocs:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch API documentation')
      setApiDocs(null)
    } finally {
      setLoading(false)
    }
  }

  // Fetch data ketika slug berubah
  useEffect(() => {
    if (slug) {
      fetchApiDocs()
    } else {
      setApiDocs(null)
      setLoading(false)
    }
  }, [slug])

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  return {
    apiDocs,
    generateSlug,
    isLoading: loading,
    error
  }
}
