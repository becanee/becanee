![logo](https://klola.id/images/logo-blue-full.png)

# Klola Assistant

Managing People. Anywhere. Anytime.
Enjoy the flexibility and freedom to work and manage your people from anywhere, anytime. As long as you are connected to internet, working and managing your people can be done easily from anywhere and anytime.

## 🔀 Available API
- **Postman Collection** : [Klola Assistant](https://kloladev.postman.co/workspace/Klola-v2-Dev~f2eb5b36-0c7d-41c7-bfba-e2466cbf843d/collection/32156503-a508b6cb-70c8-4b10-890c-b5425aa710b0?action=share&source=copy-link&creator=32156503)

## 🛠️ System Requirements
- **Postman** : v10.24.1 atau versi terbaru
- **bun**  : v1.2 atau versi terbaru

## ⚡ Quick Installation

Untuk instalasi project, jalankan perintah berikut:
```bash
-  git clone https://gitlab.com/klolav2/klola-assistant
-  mv klola-assistant [nama-project-baru]
-  cd [nama-project-baru]
-  bun install
- 
- # jika install error, delete folder node_modules lalu gunakan (bun install --force)
- # jalankan project menggunakan [bun run dev]
```

##  📝  Development Notes

### 1. Environtment
Setup .env.local:
```bash
NEXT_PUBLIC_KLOLA_DEV_URL=
NEXT_PUBLIC_GROQ_API_KEY=
```
- NEXT_PUBLIC_KLOLA_DEV_URL = Backend api server
- NEXT_PUBLIC_GROQ_API_KEY = API Key dari Groq [Cek Disini](https://console.groq.com/keys)

### 2. Struktur Folder
Routing di next.js app router versi terbaru SANGAT berbeda dengan yang lama atau pages router, pastikan sudah mempelajari strukturnya di dokumentasi: [Baca Disini](https://nextjs.org/docs/app)
 
Flow dan Struktur folder dari aplikasi mulai dijalankan adalah sebagai berikut :
- Folder utama untuk routing API ``/src/app/api`
- Folder core function ``/src/core``
- Folder prompting management ``/src/prompt``

## ⚠️ GIT Management

1. GIT Pull Procedure
- Update source local repository dari remote repository git pull origin master
- Pastikan sebelum menjalankan update source local, semua perubahan yang ada di local repository untuk COMMIT terlebih dahulu untuk mencegah CONFLICT
- Pastikan rutin untuk melakukan update setiap hari agar source local selalu terupdate dengan setiap perubahan yang ada di remote repository

2. GIT Push Procedure
- Create & checkout new branch di local repository git checkout -b nama-branch
- Commit perubahan source code git commit -m "update changes info""
- Pastikan sebelum push, lakukan build di local terlebih dahulu untuk memastikan tidak ada build error yarn run build
- Push commit ke remote repository git push https://[GITLAB_USERNAME]@gitlab.com/klolav2/klola-assistant.git
- Merge Request melalui GitLab

## 📄 License
- Developed by PT. KLOLA INDONESIA
-  [![MIT License](https://img.shields.io/badge/License-GPL-blue.svg)](https://klola.id)

---
© 2025 - [Klola Indonesia](https://klola.id)