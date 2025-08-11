import { createClient } from '@/utils/supabase/client'

/**
 * Interface untuk data collection dari database
 */
export interface CollectionData {
  id: string
  name: string
  description: string
  status: string
  version: string
  category: string
  endpoint: string
  base_url: string
  authentication: string
  rate_limit: string
  provider: string // External API URL untuk proxy
  code_examples: {
    javascript: string
    golang: string
    python: string
    php: string
  }
  response_example: string
  parameters: {
    name: string
    type: string
    required: boolean
    description: string
  }[]
  slug: string
  created_at: string
  updated_at: string
}

/**
 * Insert test data ke database untuk testing
 * @returns Promise<void>
 */
export async function insertTestData(): Promise<void> {
  try {
    const supabase = createClient()
    
    const testData = [
      {
        name: "User Management API",
        description: "Comprehensive API untuk mengelola data pengguna dengan fitur CRUD lengkap",
        status: "active",
        version: "v1.0",
        category: "Authentication",
        endpoint: "/api/v1/users",
        base_url: "https://api.example.com",
        authentication: "Bearer Token",
        rate_limit: "1000 requests/hour",
        provider: "https://jsonplaceholder.typicode.com/users",
        code_examples: {
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
        response_example: `{
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
}`,
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
        slug: "user-management-api"
      },
      {
        name: "Weather API",
        description: "API untuk mendapatkan data cuaca berdasarkan kota dan negara",
        status: "active",
        version: "v1.0",
        category: "Information",
        endpoint: "/api/weather",
        base_url: "https://api.openweathermap.org",
        authentication: "API Key",
        rate_limit: "2000 requests/hour",
        provider: "https://api.openweathermap.org/data/2.5/weather?q=[city],[country]&units=[units]&appid=YOUR_API_KEY",
        code_examples: {
          javascript: `// JavaScript (Fetch API)
const response = await fetch('https://api.example.com/api/weather-api?city=jakarta&country=id&units=metric', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`,
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
        response_example: `{
  "success": true,
  "data": {
    "id": 123,
    "name": "New Product",
    "price": 99.99,
    "category": "electronics",
    "created_at": "2024-01-15T10:30:00Z"
  }
}`,
        parameters: [
          {
            name: "city",
            type: "string",
            required: true,
            description: "Nama kota untuk data cuaca"
          },
          {
            name: "country",
            type: "string",
            required: true,
            description: "Kode negara (ISO 3166-1 alpha-2)"
          },
          {
            name: "units",
            type: "string",
            required: false,
            description: "Unit pengukuran (metric/imperial)"
          }
        ],
        slug: "weather-api"
      },
      {
        name: "BMKG Prakiraan Cuaca",
        description: "API untuk mendapatkan prakiraan cuaca dari BMKG berdasarkan kode wilayah",
        status: "active",
        version: "v1.0",
        category: "Information",
        endpoint: "/api/bmkg-cuaca",
        base_url: "https://api.bmkg.go.id",
        authentication: "Public",
        rate_limit: "1000 requests/hour",
        provider: "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=[kodewilayah]",
        code_examples: {
          javascript: `// JavaScript (Fetch API)
const response = await fetch('https://api.example.com/api/bmkg-cuaca?kodewilayah=3171', {
  method: 'GET',
  headers: {
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
    req, _ := http.NewRequest("GET", "https://api.example.com/api/bmkg-cuaca?kodewilayah=3171", nil)
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

url = "https://api.example.com/api/bmkg-cuaca"
params = {"kodewilayah": "3171"}

response = requests.get(url, params=params)
data = response.json()
print(data)`,
          php: `<?php
// PHP (cURL)
$url = 'https://api.example.com/api/bmkg-cuaca?kodewilayah=3171';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
print_r($data);
?>`
        },
        response_example: `{
  "success": true,
  "data": {
    "wilayah": "DKI Jakarta",
    "prakiraan": [
      {
        "tanggal": "2024-01-15",
        "cuaca": "Cerah Berawan",
        "suhu_min": 25,
        "suhu_max": 32
      }
    ]
  }
}`,
        parameters: [
          {
            name: "kodewilayah",
            type: "string",
            required: true,
            description: "Kode wilayah BMKG (contoh: 3171 untuk DKI Jakarta)"
          }
        ],
        slug: "bmkg-cuaca"
      },
      {
        name: "BMKG Prakiraan Gempa",
        description: "API untuk mendapatkan prakiraan gempa dari BMKG berdasarkan kota",
        status: "active",
        version: "v1.0",
        category: "Information",
        endpoint: "/api/bmkg-gempa",
        base_url: "https://api.bmkg.go.id",
        authentication: "Public",
        rate_limit: "1000 requests/hour",
        provider: "https://api.bmkg.go.id/publik/prakiraan-gempa?adm4=[kota]",
        code_examples: {
          javascript: `// JavaScript (Fetch API)
const response = await fetch('https://api.example.com/api/bmkg-gempa?kota=jakarta', {
  method: 'GET',
  headers: {
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
    req, _ := http.NewRequest("GET", "https://api.example.com/api/bmkg-gempa?kota=jakarta", nil)
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

url = "https://api.example.com/api/bmkg-gempa"
params = {"kota": "jakarta"}

response = requests.get(url, params=params)
data = response.json()
print(data)`,
          php: `<?php
// PHP (cURL)
$url = 'https://api.example.com/api/bmkg-gempa?kota=jakarta';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
print_r($data);
?>`
        },
        response_example: `{
  "success": true,
  "data": {
    "kota": "Jakarta",
    "prakiraan_gempa": [
      {
        "tanggal": "2024-01-15",
        "magnitudo": "3.5",
        "kedalaman": "10 km",
        "lokasi": "Jakarta Selatan"
      }
    ]
  }
}`,
        parameters: [
          {
            name: "kota",
            type: "string",
            required: true,
            description: "Nama kota untuk prakiraan gempa"
          }
        ],
        slug: "bmkg-gempa"
      }
    ]

    const { error } = await supabase
      .from('collections')
      .insert(testData)

    if (error) {
      console.error('Error inserting test data:', error)
      throw new Error(`Failed to insert test data: ${error.message}`)
    }

    console.log('Test data inserted successfully')
  } catch (error) {
    console.error('Error in insertTestData:', error)
    throw error
  }
}

/**
 * Fetch semua collections dari database
 * @returns Promise<CollectionData[]> Array of collections
 */
export async function getAllCollections(): Promise<CollectionData[]> {
  try {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('collections')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching collections:', error)
      throw new Error(`Failed to fetch collections: ${error.message}`)
    }

    return data || []
  } catch (error) {
    console.error('Error in getAllCollections:', error)
    throw error
  }
}

/**
 * Fetch collection berdasarkan slug
 * @param slug - Slug collection yang dicari
 * @returns Promise<CollectionData | null> Collection data atau null jika tidak ditemukan
 */
export async function getCollectionBySlug(slug: string): Promise<CollectionData | null> {
  try {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('collections')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned
        return null
      }
      console.error('Error fetching collection by slug:', error)
      throw new Error(`Failed to fetch collection: ${error.message}`)
    }

    return data
  } catch (error) {
    console.error('Error in getCollectionBySlug:', error)
    throw error
  }
}

/**
 * Fetch collections dengan pagination
 * @param page - Halaman yang diminta (1-based)
 * @param limit - Jumlah item per halaman
 * @returns Promise<{data: CollectionData[], total: number, page: number, limit: number}>
 */
export async function getCollectionsWithPagination(
  page: number = 1,
  limit: number = 10
): Promise<{
  data: CollectionData[]
  total: number
  page: number
  limit: number
}> {
  try {
    const supabase = createClient()
    
    const from = (page - 1) * limit
    const to = from + limit - 1

    // Fetch data dengan pagination
    const { data, error, count } = await supabase
      .from('collections')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to)

    if (error) {
      console.error('Error fetching collections with pagination:', error)
      throw new Error(`Failed to fetch collections: ${error.message}`)
    }

    return {
      data: data || [],
      total: count || 0,
      page,
      limit
    }
  } catch (error) {
    console.error('Error in getCollectionsWithPagination:', error)
    throw error
  }
}

/**
 * Search collections berdasarkan nama atau deskripsi
 * @param query - Query pencarian
 * @returns Promise<CollectionData[]> Array of matching collections
 */
export async function searchCollections(query: string): Promise<CollectionData[]> {
  try {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('collections')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error searching collections:', error)
      throw new Error(`Failed to search collections: ${error.message}`)
    }

    return data || []
  } catch (error) {
    console.error('Error in searchCollections:', error)
    throw error
  }
}

/**
 * Filter collections berdasarkan category
 * @param category - Category yang difilter
 * @returns Promise<CollectionData[]> Array of filtered collections
 */
export async function getCollectionsByCategory(category: string): Promise<CollectionData[]> {
  try {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('collections')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error filtering collections by category:', error)
      throw new Error(`Failed to filter collections: ${error.message}`)
    }

    return data || []
  } catch (error) {
    console.error('Error in getCollectionsByCategory:', error)
    throw error
  }
}
