/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 정적 파일로 빌드
  distDir: "out", // 빌드 결과 폴더,
  assetPrefix: "/assets" // _next를 /assets로 변경
};

export default nextConfig;
