/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */
const nextConfig = {
    async headers(){
        return [
            {
                source:'/embed',
                headers:[
                {
                    key:"Content-Security-Policy",
                    value:"frame-src `self` https://www.create.xyz/app/aab6b293-0673-4d7b-a8ec-04d00c0ce1fc "
                }

                ]
            }
        ]
    }

 
};

export default nextConfig;
