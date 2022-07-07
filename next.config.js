/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
        source:'/reset',
        destination:'/auth/reset',     
      },
      {
        source:'/signin',
        destination:'/auth/signIn',     
      },
    ]
  }
}

module.exports = nextConfig
