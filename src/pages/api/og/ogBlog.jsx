import { ImageResponse } from '@vercel/og'

import { siteConfig } from '@/data/site'

export const config = {
  runtime: 'edge',
}

const interRegular = fetch(
  new URL('../../../../public/fonts/inter/Inter-Regular.otf', import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(
  new URL('../../../../public/fonts/inter/Inter-Bold.otf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(request) {
  try {
    // Make sure the font exists in the specified path:
    const [interRegularFont, interBoldFont] = await Promise.all([
      interRegular,
      interBold,
    ])

    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : siteConfig.blogSiteName

    // ?description=<description>
    const hasDescription = searchParams.has('description')
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 280).length < 280
        ? `${searchParams.get('description')?.slice(0, 280)}`
        : `${searchParams.get('description')?.slice(0, 280)} ...`
      : siteConfig.blogSiteDescription

    return new ImageResponse(
      (
        <div tw="relative flex flex-col w-full h-full bg-[#151719]">
          <div tw="absolute flex top-0 left-0">
            <svg
              width="1200"
              height="630"
              viewBox="0 0 1200 630"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_508_2306)">
                <g opacity="0.6" filter="url(#filter0_f_508_2306)">
                  <ellipse
                    cx="1219"
                    cy="20"
                    rx="148"
                    ry="44"
                    transform="rotate(-90 1219 20)"
                    fill="#FFB224"
                  />
                </g>
                <g opacity="0.6" filter="url(#filter1_f_508_2306)">
                  <ellipse
                    cx="742.5"
                    cy="76"
                    rx="476.5"
                    ry="45"
                    fill="#0092FF"
                  />
                </g>
                <g opacity="0.2" filter="url(#filter2_f_508_2306)">
                  <circle cx="77" cy="680" r="281" fill="#0954A5" />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_508_2306"
                  x="875"
                  y="-428"
                  width="688"
                  height="896"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_508_2306"
                  />
                </filter>
                <filter
                  id="filter1_f_508_2306"
                  x="-34"
                  y="-269"
                  width="1553"
                  height="690"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_508_2306"
                  />
                </filter>
                <filter
                  id="filter2_f_508_2306"
                  x="-504"
                  y="99"
                  width="1162"
                  height="1162"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_508_2306"
                  />
                </filter>
                <clipPath id="clip0_508_2306">
                  <rect width="1200" height="630" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div tw="relative flex flex-col w-full px-16 py-20">
            <div tw="flex h-12">
              <svg
                width="240"
                height="48"
                viewBox="0 0 240 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.0171C0 3.14166 3.14166 0 7.0171 0H39.8055C43.681 0 46.8226 3.14166 46.8226 7.0171V39.8055C46.8226 43.681 43.681 46.8226 39.8055 46.8226H7.0171C3.14166 46.8226 0 43.681 0 39.8055V7.0171Z"
                  fill="#212526"
                />
                <path
                  d="M5.80469 15.0741C5.80469 13.9707 5.80469 13.419 6.14748 13.0762C6.49028 12.7334 7.042 12.7334 8.14544 12.7334H38.7156C39.8191 12.7334 40.3708 12.7334 40.7136 13.0762C41.0564 13.419 41.0564 13.9707 41.0564 15.0742V16.9468C41.0564 18.0502 41.0564 18.6019 40.7136 18.9447C40.3708 19.2875 39.8191 19.2875 38.7157 19.2875H8.14544C7.042 19.2875 6.49028 19.2875 6.14748 18.9447C5.80469 18.6019 5.80469 18.0502 5.80469 16.9468V15.0741Z"
                  fill="url(#paint0_linear_512_2345)"
                />
                <path
                  d="M12.499 23.9697C12.499 22.8662 12.499 22.3145 12.8418 21.9717C13.1846 21.6289 13.7363 21.6289 14.8398 21.6289H32.0209C33.1243 21.6289 33.6761 21.6289 34.0188 21.9717C34.3616 22.3145 34.3616 22.8662 34.3616 23.9697V25.8423C34.3616 26.9457 34.3616 27.4974 34.0188 27.8402C33.6761 28.183 33.1243 28.183 32.0209 28.183H14.8398C13.7363 28.183 13.1846 28.183 12.8418 27.8402C12.499 27.4974 12.499 26.9457 12.499 25.8423V23.9697Z"
                  fill="url(#paint1_linear_512_2345)"
                />
                <path
                  d="M18.7256 32.8642C18.7256 31.7607 18.7256 31.209 19.0684 30.8662C19.4112 30.5234 19.9629 30.5234 21.0663 30.5234H25.7947C26.8981 30.5234 27.4498 30.5234 27.7926 30.8662C28.1354 31.209 28.1354 31.7607 28.1354 32.8642V34.7368C28.1354 35.8402 28.1354 36.392 27.7926 36.7347C27.4498 37.0775 26.8981 37.0775 25.7947 37.0775H21.0663C19.9629 37.0775 19.4112 37.0775 19.0684 36.7347C18.7256 36.392 18.7256 35.8402 18.7256 34.7368V32.8642Z"
                  fill="url(#paint2_linear_512_2345)"
                />
                <path
                  d="M70.3399 38.3764C68.1411 38.3764 66.3792 37.8408 65.0543 36.7695C63.7293 35.6983 63.0669 33.7955 63.0669 31.0611V21.9275H59.4727V17.403H63.0669L63.7012 11.7791H68.4794V17.403H74.1456V21.9275H68.4794V31.1033C68.4794 32.1182 68.6908 32.8229 69.1136 33.2176C69.5647 33.5841 70.3258 33.7673 71.397 33.7673H74.0187V38.3764H70.3399Z"
                  fill="white"
                />
                <path
                  d="M80.8646 14.1471C79.8779 14.1471 79.0604 13.8511 78.412 13.2591C77.7919 12.6671 77.4818 11.92 77.4818 11.018C77.4818 10.1159 77.7919 9.38294 78.412 8.81914C79.0604 8.22715 79.8779 7.93115 80.8646 7.93115C81.8512 7.93115 82.6546 8.22715 83.2748 8.81914C83.9232 9.38294 84.2474 10.1159 84.2474 11.018C84.2474 11.92 83.9232 12.6671 83.2748 13.2591C82.6546 13.8511 81.8512 14.1471 80.8646 14.1471ZM78.1583 38.3764V17.403H83.5708V38.3764H78.1583Z"
                  fill="white"
                />
                <path
                  d="M98.5652 38.8838C96.4509 38.8838 94.5763 38.4327 92.9412 37.5307C91.3062 36.6286 90.0236 35.36 89.0933 33.725C88.163 32.09 87.6979 30.2013 87.6979 28.0588C87.6979 25.8882 88.1489 23.9572 89.051 22.2658C89.9813 20.5744 91.2498 19.2635 92.8567 18.3333C94.4917 17.3748 96.4086 16.8956 98.6074 16.8956C100.665 16.8956 102.484 17.3466 104.062 18.2487C105.641 19.1508 106.867 20.3911 107.741 21.9698C108.643 23.5202 109.094 25.2539 109.094 27.1708C109.094 27.4809 109.08 27.8051 109.052 28.1434C109.052 28.4817 109.038 28.8341 109.01 29.2005H93.0681C93.1809 30.8355 93.7447 32.1182 94.7595 33.0485C95.8025 33.9787 97.057 34.4439 98.5229 34.4439C99.6223 34.4439 100.538 34.2042 101.271 33.725C102.033 33.2176 102.596 32.5692 102.963 31.7799H108.46C108.065 33.1048 107.403 34.317 106.472 35.4164C105.57 36.4876 104.443 37.3333 103.09 37.9535C101.765 38.5737 100.257 38.8838 98.5652 38.8838ZM98.6074 21.2932C97.2825 21.2932 96.1126 21.6738 95.0978 22.4349C94.0829 23.1679 93.4346 24.2955 93.1527 25.8177H103.597C103.513 24.4364 103.005 23.337 102.075 22.5195C101.145 21.702 99.9887 21.2932 98.6074 21.2932Z"
                  fill="white"
                />
                <path
                  d="M112.801 38.3764V17.403H117.621L118.129 21.3355C118.89 19.9824 119.919 18.9112 121.215 18.1218C122.54 17.3043 124.091 16.8956 125.867 16.8956V22.6041H124.344C123.16 22.6041 122.103 22.7873 121.173 23.1538C120.243 23.5202 119.51 24.1545 118.974 25.0566C118.467 25.9587 118.213 27.2131 118.213 28.82V38.3764H112.801Z"
                  fill="white"
                />
                <path
                  d="M151.075 38.7153C149.499 38.7153 148.12 38.4198 146.939 37.829C145.757 37.2381 144.8 36.4081 144.069 35.339L143.478 38.2088H138.667V7.82227H144.069V20.2723C144.744 19.3438 145.63 18.5279 146.728 17.8245C147.853 17.1211 149.302 16.7694 151.075 16.7694C153.044 16.7694 154.803 17.2477 156.35 18.2043C157.897 19.161 159.121 20.4693 160.022 22.1293C160.922 23.7893 161.372 25.6744 161.372 27.7845C161.372 29.8947 160.922 31.7798 160.022 33.4398C159.121 35.0717 157.897 36.3659 156.35 37.3225C154.803 38.251 153.044 38.7153 151.075 38.7153ZM149.935 33.9885C151.651 33.9885 153.072 33.4117 154.198 32.2581C155.323 31.1046 155.886 29.6134 155.886 27.7845C155.886 25.9557 155.323 24.4505 154.198 23.2688C153.072 22.0871 151.651 21.4962 149.935 21.4962C148.191 21.4962 146.756 22.0871 145.63 23.2688C144.533 24.4223 143.984 25.9135 143.984 27.7423C143.984 29.5712 144.533 31.0764 145.63 32.2581C146.756 33.4117 148.191 33.9885 149.935 33.9885Z"
                  fill="#687076"
                />
                <path
                  d="M165.354 38.2088V7.82227H170.756V38.2088H165.354Z"
                  fill="#687076"
                />
                <path
                  d="M185.476 38.7153C183.45 38.7153 181.621 38.251 179.99 37.3225C178.386 36.3941 177.106 35.1139 176.149 33.482C175.221 31.822 174.756 29.9088 174.756 27.7423C174.756 25.5759 175.235 23.6767 176.191 22.0449C177.148 20.3849 178.428 19.0906 180.032 18.1621C181.664 17.2337 183.493 16.7694 185.518 16.7694C187.516 16.7694 189.317 17.2337 190.92 18.1621C192.552 19.0906 193.832 20.3849 194.761 22.0449C195.717 23.6767 196.196 25.5759 196.196 27.7423C196.196 29.9088 195.717 31.822 194.761 33.482C193.832 35.1139 192.552 36.3941 190.92 37.3225C189.288 38.251 187.474 38.7153 185.476 38.7153ZM185.476 34.0307C186.883 34.0307 188.107 33.5102 189.148 32.4691C190.189 31.4 190.709 29.8244 190.709 27.7423C190.709 25.6603 190.189 24.0988 189.148 23.0577C188.107 21.9886 186.897 21.454 185.518 21.454C184.083 21.454 182.845 21.9886 181.804 23.0577C180.791 24.0988 180.285 25.6603 180.285 27.7423C180.285 29.8244 180.791 31.4 181.804 32.4691C182.845 33.5102 184.069 34.0307 185.476 34.0307Z"
                  fill="#687076"
                />
                <path
                  d="M207.726 31.9627C206.713 31.9627 205.77 31.8501 204.898 31.6251L203.336 33.1866C203.815 33.4398 204.462 33.6508 205.278 33.8197C206.094 33.9885 207.416 34.1573 209.245 34.3261C212.03 34.5793 214.056 35.2405 215.322 36.3097C216.588 37.3788 217.221 38.8559 217.221 40.741C217.221 41.979 216.884 43.1466 216.209 44.2439C215.533 45.3694 214.492 46.2697 213.085 46.945C211.679 47.6483 209.878 48 207.683 48C204.701 48 202.295 47.4373 200.467 46.3119C198.638 45.2146 197.723 43.5546 197.723 41.3319C197.723 39.4468 198.638 37.8149 200.467 36.4363C199.904 36.183 199.412 35.9158 198.989 35.6344C198.596 35.353 198.244 35.0576 197.934 34.7481V33.7774L201.606 29.8947C199.974 28.4598 199.158 26.6169 199.158 24.3661C199.158 22.9593 199.496 21.6791 200.171 20.5255C200.875 19.372 201.859 18.4576 203.125 17.7823C204.392 17.107 205.925 16.7694 207.726 16.7694C208.907 16.7694 210.005 16.9382 211.017 17.2759H218.952V20.5677L215.364 20.821C215.927 21.8901 216.209 23.0718 216.209 24.3661C216.209 25.7728 215.871 27.053 215.196 28.2066C214.52 29.3601 213.536 30.2746 212.241 30.9498C210.975 31.6251 209.47 31.9627 207.726 31.9627ZM207.726 27.8267C208.823 27.8267 209.723 27.5313 210.427 26.9405C211.158 26.3496 211.524 25.5056 211.524 24.4083C211.524 23.311 211.158 22.4669 210.427 21.876C209.723 21.2852 208.823 20.9898 207.726 20.9898C206.572 20.9898 205.644 21.2852 204.94 21.876C204.237 22.4669 203.885 23.311 203.885 24.4083C203.885 25.5056 204.237 26.3496 204.94 26.9405C205.644 27.5313 206.572 27.8267 207.726 27.8267ZM202.661 40.7832C202.661 41.8243 203.139 42.598 204.096 43.1044C205.081 43.639 206.277 43.9063 207.683 43.9063C209.034 43.9063 210.131 43.6249 210.975 43.0622C211.819 42.5277 212.241 41.7961 212.241 40.8676C212.241 40.108 211.96 39.4749 211.397 38.9685C210.863 38.462 209.78 38.1525 208.148 38.04C206.994 37.9556 205.925 37.829 204.94 37.6602C204.124 38.1103 203.533 38.6027 203.168 39.1373C202.83 39.6719 202.661 40.2205 202.661 40.7832Z"
                  fill="#687076"
                />
                <path
                  d="M230.699 38.7153C228.842 38.7153 227.21 38.4198 225.803 37.829C224.396 37.21 223.271 36.3659 222.427 35.2968C221.583 34.2276 221.076 32.9896 220.907 31.5829H226.352C226.52 32.3988 226.971 33.1022 227.702 33.693C228.462 34.2558 229.432 34.5371 230.614 34.5371C231.796 34.5371 232.654 34.298 233.189 33.8197C233.751 33.3413 234.033 32.7927 234.033 32.1737C234.033 31.2734 233.639 30.6685 232.851 30.359C232.063 30.0213 230.966 29.6978 229.559 29.3883C228.659 29.1913 227.744 28.9522 226.816 28.6708C225.887 28.3895 225.029 28.0378 224.241 27.6157C223.482 27.1656 222.863 26.6028 222.384 25.9276C221.906 25.2242 221.667 24.3661 221.667 23.3532C221.667 21.4962 222.398 19.9347 223.862 18.6686C225.353 17.4025 227.435 16.7694 230.108 16.7694C232.584 16.7694 234.553 17.3462 236.016 18.4998C237.507 19.6533 238.394 21.243 238.675 23.2688H233.568C233.259 21.7213 232.091 20.9476 230.065 20.9476C229.053 20.9476 228.265 21.1445 227.702 21.5384C227.167 21.9323 226.9 22.4247 226.9 23.0155C226.9 23.6345 227.308 24.1269 228.124 24.4927C228.94 24.8584 230.023 25.1961 231.374 25.5055C232.837 25.8432 234.173 26.223 235.383 26.645C236.621 27.0389 237.606 27.6439 238.337 28.4598C239.069 29.2476 239.435 30.3871 239.435 31.8783C239.463 33.1725 239.125 34.3402 238.422 35.3812C237.718 36.4222 236.705 37.2381 235.383 37.829C234.061 38.4198 232.499 38.7153 230.699 38.7153Z"
                  fill="#687076"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_512_2345"
                    x1="42.9056"
                    y1="12.7334"
                    x2="-0.878147"
                    y2="36.574"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0085FF" />
                    <stop offset="1" stop-color="#00FFF0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_512_2345"
                    x1="14.9217"
                    y1="14.3375"
                    x2="34.3616"
                    y2="33.9647"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F36AFF" />
                    <stop offset="1" stop-color="#FF0000" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_512_2345"
                    x1="28.6738"
                    y1="33.0632"
                    x2="17.0402"
                    y2="37.0775"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD852" />
                    <stop offset="1" stop-color="#FF7A00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div tw="flex flex-col pt-32">
              <h1 tw="flex text-[#FFFFFF] font-bold text-7xl">{title}</h1>
              <p tw="flex text-3xl leading-10 text-[#FFFFFF]">{description}</p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: interRegularFont,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Inter',
            data: interBoldFont,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}