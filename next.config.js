/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'image.tmdb.org'],
  },
  // images: {
  //   domains: ['res.cloudinary.com'],
  // },
  async rewrites(){
    return[
      {
        source:'/signup',
        destination:'/auth/signUp',     
      },
      {
        source:'/forgot',
        destination:'/auth/forgot',     
      },
      {
        source:'/reset',
        destination:'/reset/reset',     
      },
      {
        source:'/signin',
        destination:'/auth/signIn',     
      },    
    ]
  }
}

module.exports = nextConfig
