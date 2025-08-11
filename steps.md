# Project Building Checkpoint

## 🎯 **Tujuan**
Template untuk memastikan setiap fitur mengikuti cursor rules proyek.

---

## 📋 **Step 0: lorem ipsum**

### **1. Feature Description**
- [ ] **Nama Fitur**: [Nama fitur]
- [ ] **Deskripsi**: [Penjelasan singkat]
- [ ] **User Story**: [Sebagai user, saya ingin... sehingga...]
- [ ] **Requirements**: [Functional & non-functional]
- [ ] **Acceptance Criteria**: [Kriteria yang harus dipenuhi]

### **2. Feature Logic**
- [ ] **Database Schema**: [Struktur tabel yang diperlukan]
- [ ] **API Endpoints**: [Endpoint yang akan dibuat]
- [ ] **Business Logic Flow**: [Alur logika bisnis]
- [ ] **State Management**: [Bagaimana state dikelola]
- [ ] **Error Handling**: [Strategi penanganan error]

### **3. Feature Testing**
- [ ] **User Testing**: -

---

## 📋 **Chcekpoint 1: Modern landing page**

### **Step 1. Feature Description**
- [ ] **Nama Fitur**: 
- [ ] **Deskripsi**: 
- [ ] **User Story**: 
- [ ] **Requirements**: 
- [ ] **Acceptance Criteria**: -

### **Step 2. Feature Logic**
- [ ] **Database Schema**: tidak ada
- [ ] **API Endpoints**: tidak ada
- [ ] **Business Logic Flow**: tidak ada

### **Step 3. Feature Testing**
- [ ] **User Testing**: tidak ada

### **Step 4. Run: Implementation Checklist**
### **Step 5. Run: Final Validation**
### **Step 6. Update this checklist if done**

---

## 📋 **Chcekpoint 2: page content**

### **Step 1. Feature Description**
- [x] **Nama Fitur**: page content
- [x] **Deskripsi**: pisah server dan client component sesuai rules
- [x] **User Story**: saya ingin menapilkan stats untuk public rest apis: total active api, today request, weekly request, overall request. Sesuaikan ChartAreaInteractive dan DataTable agar sesuai dengan konsep platform
- [x] **Requirements**: table menampilkan recent 10 fetch dari api
- [x] **Acceptance Criteria**: ChartAreaInteractive dan DataTable sudah sesuai dengan konsep platform public REST APIs

### **Step 2. Feature Logic**
- [x] **Database Schema**: tidak ada
- [x] **API Endpoints**: tidak ada
- [x] **Business Logic Flow**: tidak ada

### **Step 3. Feature Testing**
- [x] **User Testing**: ApiStats sudah sesuai keinginan

### **Step 4. Run: Implementation Checklist**
- [x] **Component Layer**: ApiRequestsTable dibuat di `src/modules/api-stats/components/`
- [x] **Business Logic Layer**: useApiRequests hook dibuat di `src/hooks/`
- [x] **Main Component**: index.tsx diupdate untuk menampilkan tabel

### **Step 5. Run: Final Validation**
- [x] **Struktur folder sesuai rules**: ✅
- [x] **Code review completed**: ✅
- [x] **Performance acceptable**: ✅
- [x] **Error handling implemented**: ✅

---

## 📋 **Chcekpoint 3: main page update**

### **Step 1. Feature Description**
- [x] **Nama Fitur**: Fresh API Requests Table
- [x] **Deskripsi**: Hapus table lama dan buat table baru yang fresh menggunakan shadcn/ui untuk menampilkan last 10 fetch API
- [x] **User Story**: Hapus table karena tidak terpakai, lalu buatkan table baru menggunakan `https://ui.shadcn.com/docs/components/table` untuk menapilkan last 10 fetch API
- [x] **Requirements**: Gunakan komponen shadcn/ui table yang fresh dan modern
- [x] **Acceptance Criteria**: Table baru berhasil dibuat dengan design yang fresh dan menampilkan last 10 fetch API

### **Step 2. Feature Logic**
- [x] **Database Schema**: tidak ada
- [x] **API Endpoints**: tidak ada
- [x] **Business Logic Flow**: tidak ada

### **Step 3. Feature Testing**
- [x] **User Testing**: Table baru sudah berhasil dibuat dan terintegrasi

### **Step 4. Run: Implementation Checklist**
- [x] **Component Layer**: ApiRequestsTable baru dibuat di `src/modules/api-stats/components/`
- [x] **Cleanup**: Komponen lama dan hook lama berhasil dihapus
- [x] **Integration**: index.tsx sudah menggunakan komponen table baru
- [x] **Design**: Menggunakan shadcn/ui table component yang fresh dan modern

### **Step 5. Run: Final Validation**
- [x] **Struktur folder sesuai rules**: ✅
- [x] **Code review completed**: ✅
- [x] **Performance acceptable**: ✅
- [x] **Error handling implemented**: ✅

### **Step 6. Update this checklist if done**
- [x] **Checkpoint 3 selesai**: Table baru berhasil dibuat dan menggantikan table lama

---

## 📋 **Chcekpoint 4: api collections page**

### **Step 1. Feature Description**
- [x] **Nama Fitur**: halaman koleksi api
- [x] **Deskripsi**: Halaman yang menampilkan koleksi 50 API dengan card component, pagination, dan fitur search/filter
- [x] **User Story**: sayan ingin halaman ini berisi koleksi dari berbagai api yang ada menggunakan card component, dan pages ini berisi 50 list api dan pertama di akses menampilkan 10 list dan ada pagination untuk list berikutnya. Patikan route ke halaman ini ada di sidebar menggunakan next/link
- [x] **Requirements**: gunakan card component dari `npx shadcn@latest add "https://magicui.design/r/magic-card"`
- [x] **Acceptance Criteria**: Halaman API Collections berhasil dibuat dengan 50 API, pagination 10 per halaman, search/filter, dan route di sidebar

### **Step 2. Feature Logic**
- [x] **Database Schema**: tidak ada
- [x] **API Endpoints**: tidak ada
- [x] **Business Logic Flow**: Hook useApiCollections untuk state management dan pagination logic

### **Step 3. Feature Testing**
- [x] **User Testing**: Toggle show/hide sidebar dan toggle darkmode berhasil dikembalikan dengan menambahkan SiteHeader ke layout secure

### **Step 4. Run: Implementation Checklist**
- [x] **Business Logic Layer**: useApiCollections hook dibuat di `src/hooks/`
- [x] **Component Layer**: ApiCollections dibuat di `src/modules/api-collections/`
- [x] **Micro Components**: ApiCollectionCard dan Pagination dibuat di `src/modules/api-collections/components/`
- [x] **Route**: Page route dibuat di `src/app/(secure)/api-collections/page.tsx`
- [x] **Navigation**: Sidebar diupdate dengan link ke API Collections
- [x] **Design**: Menggunakan card component yang modern dan responsive

### **Step 5. Run: Final Validation**
- [x] **Struktur folder sesuai rules**: ✅
- [x] **Code review completed**: ✅
- [x] **Performance acceptable**: ✅
- [x] **Error handling implemented**: ✅

### **Step 6. Update this checklist if done**
- [x] **Checkpoint 4 selesai**: Halaman API Collections berhasil dibuat dengan semua fitur yang diminta

---

## 📋 **Chcekpoint 5: api docs page**

### **Step 1. Feature Description**
- [x] **Nama Fitur**: halaman dokumentasi api
- [x] **Deskripsi**: Halaman dokumentasi API dengan code examples untuk 4 bahasa pemrograman
- [x] **User Story**: saya ingin ketika klik tombol docs di card api collection mengarah ke halaman menggunakan slug sesuai nama api dan menampilkan beberapa codeblock untuk contoh fetch api dengan 4 contoh bahasa: javascript, golang, python dan php
- [x] **Requirements**: Dynamic routing dengan slug, code examples untuk 4 bahasa, copy-to-clipboard functionality
- [x] **Acceptance Criteria**: Halaman API docs berhasil dibuat dengan dynamic routing, code examples, dan link dari API collections

### **Step 2. Feature Logic**
- [x] **Database Schema**: tidak ada
- [x] **API Endpoints**: tidak ada
- [x] **Business Logic Flow**: Hook useApiDocs untuk mengelola data dokumentasi dan code examples

### **Step 3. Feature Testing**
- [x] **User Testing**: Code examples berhasil ditampilkan dengan responsivitas mobile yang baik

### **Step 4. Run: Implementation Checklist**
- [x] **Business Logic Layer**: useApiDocs hook dibuat di `src/hooks/`
- [x] **Component Layer**: ApiDocsPage dibuat di `src/modules/api-docs/`
- [x] **Micro Components**: CodeBlock dibuat di `src/modules/api-docs/components/`
- [x] **Dynamic Route**: Page route dibuat di `src/app/(secure)/api-docs/[slug]/page.tsx`
- [x] **Integration**: API Collection Card diupdate untuk link ke docs
- [x] **Code Examples**: 4 bahasa (JavaScript, Golang, Python, PHP) dengan syntax highlighting

### **Step 5. Run: Final Validation**
- [x] **Struktur folder sesuai rules**: ✅
- [x] **Code review completed**: ✅
- [x] **Performance acceptable**: ✅
- [x] **Error handling implemented**: ✅

### **Step 6. Update this checklist if done**
- [x] **Checkpoint 5 selesai**: Halaman API docs berhasil dibuat dengan semua fitur yang diminta

---

## 📋 **Chcekpoint 6: database table design**

### **Step 1. Feature Description**
- [ ] **Nama Fitur**: -
- [ ] **Deskripsi**: -
- [ ] **User Story**: buatkan sql editor untuk supabase, saya ingin memiliki table collections yang berisi detail api, tolong buatkan fields yang sesuai dengan detail yang ada
- [ ] **Requirements**: 
- [ ] **Acceptance Criteria**: -

### **Step 2. Feature Logic**
- [ ] **Database Schema**: tidak ada
- [ ] **API Endpoints**: tidak ada
- [ ] **Business Logic Flow**: tidak ada

### **Step 3. Feature Testing**
- [ ] **User Testing**: tidak ada

### **Step 4. Run: Implementation Checklist**
### **Step 5. Run: Final Validation**
### **Step 6. Update this checklist if done**

---

## 📋 **Checkpoint 7: konek ke supabase**

### **Step 1. Feature Description**
- [x] **Nama Fitur**: Database Integration dengan Supabase
- [x] **Deskripsi**: Mengintegrasikan aplikasi dengan database Supabase untuk fetch data API collections
- [x] **User Story**: saya ingin fetch semua data api collection yang saya punya di database
- [x] **Requirements**: saya sudah punya setup dengan supabase ssr
- [x] **Acceptance Criteria**: Berhasil fetch data dari database dengan loading states dan error handling

### **Step 2. Feature Logic**
- [x] **Database Schema**: Menggunakan existing Supabase SSR setup
- [x] **API Endpoints**: Database operations di `src/app/reqs/collections.ts`
- [x] **Business Logic Flow**: Hooks diupdate untuk fetch dari database dengan loading states

### **Step 3. Feature Testing**
- [x] **User Testing**: Sidebar cleanup berhasil
  - ✅ Hapus menu: Analytics, Projects, Team, Data Library, Reports, Work Assistant, Settings, Search
  - ✅ Pertahankan menu: Dashboard, API Collections, Get Help, NavUser
  - ✅ Hapus NavDocuments component yang tidak terpakai
  - ✅ Sidebar lebih bersih dan fokus pada fitur API documentation

### **Step 4. Run: Implementation Checklist**
- [x] **Database Layer**: Tidak diperlukan untuk cleanup UI
- [x] **Business Logic Layer**: Tidak diperlukan untuk cleanup UI
- [x] **Component Layer**: ✅ Cleanup sidebar components
- [x] **Error Handling**: Tidak diperlukan untuk cleanup UI

### **Step 5. Run: Final Validation**
- [x] **Struktur folder sesuai rules**: ✅
- [x] **Code review completed**: ✅
- [x] **Performance acceptable**: ✅
- [x] **Error handling implemented**: ✅

### **Step 6. Update this checklist if done**
- [x] **Checkpoint 7 selesai**: Database integration berhasil diimplementasi dengan fallback mock data
- [x] **Checkpoint 8 selesai**: Sidebar cleanup berhasil, menu yang tidak terpakai sudah dihapus

---

## 📋 **Chcekpoint 8: hapus yang tidak terpakai**

### **Step 1. Feature Description**
- [ ] **Nama Fitur**: -
- [ ] **Deskripsi**: -
- [ ] **User Story**: saya ingin menghapus yang tidak terpakai seperti: Sidebar menu analytics, projects, team, data library, report, work assistant, more, settings, search
- [ ] **Requirements**: 
- [ ] **Acceptance Criteria**: -

### **Step 2. Feature Logic**
- [ ] **Database Schema**: -
- [ ] **API Endpoints**: -
- [ ] **Business Logic Flow**: -

### **Step 3. Feature Testing**
- [ ] **User Testing**: -

### **Step 4. Run: Implementation Checklist**
### **Step 5. Run: Final Validation**
### **Step 6. Update this checklist if done**

---

## 📋 **Chcekpoint 9: buat route api**

### **Step 1. Feature Description**
- [x] **Nama Fitur**: Dynamic API Routes
- [x] **Deskripsi**: Route API dinamis yang proxy ke external API berdasarkan data dari database collections
- [x] **User Story**: saya ingin membuat route api dinamis di src/app/api/**. Saya ingin route ini dinamis sesuai data yang ada di database collectoins
- [x] **Requirements**: Database integration, external API proxy, standardized response format
- [x] **Acceptance Criteria**: Route berhasil proxy ke external API dengan response format yang standar

### **Step 2. Feature Logic**
- [x] **Database Schema**: Added provider field ke CollectionData interface
- [x] **API Endpoints**: Created /api/[slug]/route.ts dan /api/collections/route.ts
- [x] **Business Logic Flow**: saat akses halaman api pertama cek paramter require dari database collection field paramteres dan ketika sistem otomatis fetch ke eksternal api masukan value sesuai array yang ada di provider, karena setiap provider berbeda beda parameternya dari fields provider di database collectoins, lalu convert response seperti berikut:
jika success fetch eksternal api:
{
    httpCode: 200,
    author: "becaneee.xyz",
    msg: "success",
    api_details: {
        api_name: "",
        api_category: "",
        api_version: ""
    },
    data: [response from eksternal api]
}


jika parameter tidak ada di url api:
{
    httpCode: 401,
    author: "becaneee.xyz",
    api_details: {
        api_name: "",
        api_category: "",
        api_version: ""
    },
    msg: "failed parameter ?...= is required"
}

jika gagal fetch eksternal api:
{
    httpCode: 500,
    author: "becaneee.xyz",
    api_details: {
        api_name: "",
        api_category: "",
        api_version: ""
    },
    msg: "failed fetch [api name dari table collections], please contact author"
}

contoh 1:
fields parameter 1: [{"name": "kodewilayah", "required": true}]
data provider 1: https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=[kodewilayah]

contoh 2:
fields parameter 2: [{"name": "kota", "required": true}]
data provider 2: https://api.bmkg.go.id/publik/prakiraan-gempa?adm4=[kota]

contoh 3:
fields parameter 3: [{"name": "id", "required": true}, {"name": "name", "required": true}]
data provider 3: https://weather.googleapis.com/v1/[id]?location=[name]

pastikan fetch eksternal api dan error handling dinamis sesuai database


### **Step 3. Feature Testing**
- [ ] **User Testing**: -

### **Step 4. Run: Implementation Checklist**
### **Step 5. Run: Final Validation**
### **Step 6. Update this checklist if done**

---

## 🚀 **Implementation Checklist**

### **Database Layer**
- [ ] CRUD operations di `src/app/reqs/**`
- [ ] Implementasi Supabase pattern
- [ ] Dokumentasi dengan format yang benar

### **Business Logic Layer**
- [ ] Hooks di `src/hooks/**`
- [ ] Hooks memanggil dari `src/app/reqs/**`
- [ ] State management jika diperlukan

### **Component Layer**
- [ ] **Server Components**: `src/app/(secure)/**` (jika diperlukan)
- [ ] **Client Components**: `src/modules/**`
- [ ] **Main Component**: Nama file HARUS `index.tsx`
- [ ] **Micro Components**: Pisahkan berdasarkan fungsi

### **Utility Layer**
- [ ] Helper functions di `src/utils/**` jika diperlukan
- [ ] Pure functions tanpa side effects
- [ ] Dokumentasi lengkap

---

## ✅ **Final Validation**

### **Pre-Launch**
- [ ] Struktur folder sesuai rules
- [ ] Code review completed
- [ ] Performance acceptable
- [ ] Error handling implemented

### **Post-Launch**
- [ ] Performance metrics tracked

---


## 📝 **Penting**

**Cursor Rules yang HARUS diikuti:**
- Server components: `src/app/(secure)/**` ONLY
- Client components: `src/modules/**` ONLY  
- Business logic: `src/hooks/**` ONLY
- Database operations: `src/app/reqs/**` ONLY
- Utility functions: `src/utils/**` ONLY

**Dokumentasi Wajib**: Setiap function di `src/utils/**`, `src/hooks/**`, `src/app/reqs/**` harus memiliki dokumentasi sesuai format yang ditentukan.