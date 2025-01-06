<template>
    <Header></Header>

    <!-- 主内容区域 -->
    <main class="container max-w-screen-xl mx-auto p-4">
        <!-- grid 表格布局，分为 4 列 -->
        <div class="grid grid-cols-4 gap-4">
            <!-- 左边栏，占用 3 列 -->
            <div class="col-span-4 md:col-span-3 mb-3">
                <!-- 文章列表，grid表格布局，分为2列 -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-2 md:col-span-1">
                        <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <!-- 文章封面 -->
                            <a href="#">
                                <img class="rounded-t-lg h-48 w-full"
                                    src="https://img.quanxiaoha.com/quanxiaoha/193dd1504ebb4f138085acb23619e0dd.jpg"
                                    alt="" />
                            </a>
                            <div class="p-5">
                                <!-- 标签 -->
                                <div class="mb-3">
                                    <span
                                        class="cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">从0到1</span>
                                    <span
                                        class="cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">知识星球</span>
                                    <span
                                        class="cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">项目实战</span>
                                </div>
                                <!-- 文章标题 -->
                                <a href="#">
                                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        从零手撸前后端分离博客（已更新11w+字）</h2>
                                </a>
                                <!-- 文章摘要 -->
                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">已更新 69 节内容，共计 105150
                                    字，演示截图：521
                                    张，持续爆肝中...</p>
                                <!-- 文章发布时间、所属分类 -->
                                <p class="flex items-center font-normal text-gray-400 text-sm dark:text-gray-400">
                                    <!-- 发布时间 -->
                                    <svg class="inline w-3 h-3 mr-2 text-gray-400 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
                                    </svg>
                                    2023-10-22

                                    <!-- 所属分类 -->
                                    <svg class="inline w-3 h-3 ml-5 mr-2 text-gray-400 dark:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H1Z" />
                                    </svg>
                                    <a href="#" class="text-gray-400 hover:underline">Java</a>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg h-48 w-full"
                                    src="https://img.quanxiaoha.com/quanxiaoha/193dd1504ebb4f138085acb23619e0dd.jpg"
                                    alt="" />
                            </a>
                            <div class="p-5">
                                <!-- 标签 -->
                                <div class="mb-3">
                                    <span
                                        class="cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">从0到1</span>
                                    <span
                                        class="cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">知识星球</span>
                                    <span
                                        class="cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">项目实战</span>
                                </div>
                                <a href="#">
                                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        从零手撸前后端分离博客（已更新11w+字）</h2>
                                </a>
                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">已更新 69 节内容，共计 105150
                                    字，演示截图：521
                                    张，持续爆肝中...</p>
                                <!-- 文章发布时间、所属分类 -->
                                <p class="flex items-center font-normal text-gray-400 text-sm dark:text-gray-400">
                                    <!-- 发布时间 -->
                                    <svg class="inline w-3 h-3 mr-2 text-gray-400 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
                                    </svg>
                                    2023-10-22

                                    <!-- 所属分类 -->
                                    <svg class="inline w-3 h-3 ml-5 mr-2 text-gray-400 dark:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H1Z" />
                                    </svg>
                                    <a href="#" class="text-gray-400 hover:underline">Java</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右边侧边栏，占用一列 -->
            <aside class="col-span-4 md:col-span-1">
                <!-- 博主信息 -->
                <div
                    class="w-full py-5 px-2 mb-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-col items-center">
                        <!-- 博主头像 -->
                        <img class="w-24 h-24 mb-3 rounded-full shadow"
                            src="https://img.quanxiaoha.com/quanxiaoha/f97361c0429d4bb1bc276ab835843065.jpg"
                            alt="Bonnie image" />
                        <!-- 博主昵称 -->
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">犬小哈</h5>
                        <!-- 介绍语 -->
                        <span class="text-sm text-gray-500 dark:text-gray-400">Java工程师一枚</span>
                        <!-- 第三方平台主页跳转（如 GitHub 等） -->
                        <div class="flex justify-center mt-5 gap-2">
                            <!-- GitHub -->
                            <svg t="1736180026012" data-tooltip-target="github-tooltip-bottom"
                                data-tooltip-placement="bottom" class="icon w-7 h-7" viewBox="0 0 1049 1024"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4046" width="200" height="200">
                                <path
                                    d="M524.979332 0C234.676191 0 0 234.676191 0 524.979332c0 232.068678 150.366597 428.501342 358.967656 498.035028 26.075132 5.215026 35.636014-11.299224 35.636014-25.205961 0-12.168395-0.869171-53.888607-0.869171-97.347161-146.020741 31.290159-176.441729-62.580318-176.441729-62.580318-23.467619-60.841976-58.234462-76.487055-58.234463-76.487055-47.804409-32.15933 3.476684-32.15933 3.476685-32.15933 53.019436 3.476684 80.83291 53.888607 80.83291 53.888607 46.935238 79.963739 122.553122 57.365291 152.97411 43.458554 4.345855-33.897672 18.252593-57.365291 33.028501-70.402857-116.468925-12.168395-239.022047-57.365291-239.022047-259.012982 0-57.365291 20.860106-104.300529 53.888607-140.805715-5.215026-13.037566-23.467619-66.926173 5.215027-139.067372 0 0 44.327725-13.906737 144.282399 53.888607 41.720212-11.299224 86.917108-17.383422 131.244833-17.383422s89.524621 6.084198 131.244833 17.383422C756.178839 203.386032 800.506564 217.29277 800.506564 217.29277c28.682646 72.1412 10.430053 126.029806 5.215026 139.067372 33.897672 36.505185 53.888607 83.440424 53.888607 140.805715 0 201.64769-122.553122 245.975415-239.891218 259.012982 19.121764 16.514251 35.636014 47.804409 35.636015 97.347161 0 70.402857-0.869171 126.898978-0.869172 144.282399 0 13.906737 9.560882 30.420988 35.636015 25.205961 208.601059-69.533686 358.967656-265.96635 358.967655-498.035028C1049.958663 234.676191 814.413301 0 524.979332 0z"
                                    fill="#e46e2e" p-id="4047"></path>
                                <path
                                    d="M199.040177 753.571326c-0.869171 2.607513-5.215026 3.476684-8.691711 1.738342s-6.084198-5.215026-4.345855-7.82254c0.869171-2.607513 5.215026-3.476684 8.691711-1.738342s5.215026 5.215026 4.345855 7.82254z m-6.953369-4.345856M219.900283 777.038945c-2.607513 2.607513-7.82254 0.869171-10.430053-2.607514-3.476684-3.476684-4.345855-8.691711-1.738342-11.299224 2.607513-2.607513 6.953369-0.869171 10.430053 2.607514 3.476684 4.345855 4.345855 9.560882 1.738342 11.299224z m-5.215026-5.215027M240.760389 807.459932c-3.476684 2.607513-8.691711 0-11.299224-4.345855-3.476684-4.345855-3.476684-10.430053 0-12.168395 3.476684-2.607513 8.691711 0 11.299224 4.345855 3.476684 4.345855 3.476684 9.560882 0 12.168395z m0 0M269.443034 837.011749c-2.607513 3.476684-8.691711 2.607513-13.906737-1.738342-4.345855-4.345855-6.084198-10.430053-2.607513-13.037566 2.607513-3.476684 8.691711-2.607513 13.906737 1.738342 4.345855 3.476684 5.215026 9.560882 2.607513 13.037566z m0 0M308.555733 853.526c-0.869171 4.345855-6.953369 6.084198-13.037566 4.345855-6.084198-1.738342-9.560882-6.953369-8.691711-10.430053 0.869171-4.345855 6.953369-6.084198 13.037566-4.345855 6.084198 1.738342 9.560882 6.084198 8.691711 10.430053z m0 0M351.145116 857.002684c0 4.345855-5.215026 7.82254-11.299224 7.82254-6.084198 0-11.299224-3.476684-11.299224-7.82254s5.215026-7.82254 11.299224-7.82254c6.084198 0 11.299224 3.476684 11.299224 7.82254z m0 0M391.126986 850.049315c0.869171 4.345855-3.476684 8.691711-9.560882 9.560882-6.084198 0.869171-11.299224-1.738342-12.168395-6.084197-0.869171-4.345855 3.476684-8.691711 9.560881-9.560882 6.084198-0.869171 11.299224 1.738342 12.168396 6.084197z m0 0"
                                    fill="#e46e2e" p-id="4048"></path>
                            </svg>
                            <!-- GitHub Tooltip -->
                            <div id="github-tooltip-bottom" role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                我的 GitHub
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                            <!-- gitee -->
                            <svg t="1736180256715" data-tooltip-target="gitee-tooltip-bottom"
                                data-tooltip-placement="bottom" class="icon w-7 h-7" viewBox="0 0 1024 1024"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6664" width="200" height="200">
                                <path
                                    d="M512 1021.72444445A509.72444445 509.72444445 0 1 1 512 2.27555555a509.72444445 509.72444445 0 0 1 0 1019.4488889z m257.99338667-566.37667556H480.54272a25.19495111 25.19495111 0 0 0-25.19495111 25.19495111v62.91456c0 13.90819555 11.28675555 25.19495111 25.12213333 25.19495111h176.21902223c13.98101333 0 25.19495111 11.28675555 25.1949511 25.12213334v12.59747555c0 41.72458667-33.78744889 75.51203555-75.51203555 75.51203555H367.23825778a25.19495111 25.19495111 0 0 1-25.12213333-25.12213333V417.62816c0-41.72458667 33.78744889-75.51203555 75.43921777-75.51203555h352.43804445c13.83537778 0 25.12213333-11.28675555 25.12213333-25.19495112v-62.91456a25.19495111 25.19495111 0 0 0-25.12213333-25.19495111h-352.43804445a188.74368 188.74368 0 0 0-188.74368 188.81649778v352.36522667c0 13.90819555 11.28675555 25.19495111 25.19495111 25.19495111h371.22503112a169.88387555 169.88387555 0 0 0 169.95669333-169.88387556V480.54272a25.19495111 25.19495111 0 0 0-25.19495111-25.19495111z"
                                    fill="#C71D23" p-id="6665"></path>
                            </svg>
                            <div id="gitee-tooltip-bottom" role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                我的 Gitee
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                            <!-- 知乎 -->
                            <svg t="1736180300784" data-tooltip-target="zhihu-tooltip-bottom"
                                data-tooltip-placement="bottom" class="icon w-7 h-7" viewBox="0 0 1024 1024"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7631" width="200" height="200">
                                <path
                                    d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m-129.877333-756.48s-36.1984 2.116267-48.981334 24.490667c-12.782933 22.357333-54.306133 137.3696-54.306133 137.3696s13.841067 6.382933 37.2736-10.6496c23.432533-17.0496 30.890667-46.865067 30.890667-46.865067l42.581333-2.116267 1.0752 121.3952s-73.489067-1.0752-88.405333 0c-14.8992 1.058133-23.415467 40.448-23.415467 40.448h111.8208s-9.591467 67.106133-38.3488 116.087467c-28.740267 48.981333-83.063467 87.313067-83.063467 87.313067s39.424 15.9744 77.738667-6.382934c38.3488-22.357333 66.6112-120.712533 66.6112-120.712533l89.941333 110.062933s8.192-52.394667-1.467733-67.1744c-9.659733-14.7968-62.208-74.2912-62.208-74.2912l-22.954667 20.224 16.3328-65.109333h97.962667s0-38.3488-19.1488-40.465067c-19.182933-2.133333-78.813867 0-78.813867 0v-119.278933h88.405334s-1.0752-39.389867-18.1248-39.389867H359.765333l22.357334-64.955733z m170.001066 61.184v358.570667h36.010667l13.090133 45.0048 63.351467-45.0048h89.053867V328.704H552.123733z m42.666667 39.918933h117.879467v277.9136h-41.864534l-53.384533 40.2432-11.639467-40.2432h-10.990933V368.64z"
                                    fill="#0E87EA" p-id="7632"></path>
                            </svg>
                            <div id="zhihu-tooltip-bottom" role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                我的知乎
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                            <!-- CSDN -->
                            <svg t="1736180375600" data-tooltip-target="csdn-tooltip-bottom"
                                data-tooltip-placement="bottom" class="icon w-7 h-7" viewBox="0 0 1024 1024"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9508" width="200" height="200">
                                <path
                                    d="M285.6448 570.9312c-8.704 1.3312-16.384 2.816-24.064 3.4816-25.7024 2.2528-51.3536 3.9424-76.288-4.2496-13.9776-4.608-24.7296-12.5952-29.8496-25.9584-7.8848-20.6848 0.8704-47.104 19.8144-60.3136 17.408-12.1344 37.7344-15.9232 58.4704-15.9232 22.528 0 45.056 2.4064 68.2496 3.84L307.2 432.2816c-15.0528-1.6896-29.4912-3.8912-44.032-4.9152-40.96-2.7648-80.5888 2.6112-117.4528 20.48-30.0032 14.5408-52.0192 35.9936-58.6752 68.096-7.8336 38.1952 11.5712 69.5296 51.7632 85.8624 19.1488 7.7824 39.3216 12.4928 60.0064 12.5952 24.7808 0.1024 49.5104-1.536 74.24-2.9184 3.072-0.2048 8.2944-2.9184 8.704-5.0688 1.9456-11.5712 2.6624-23.2448 3.8912-35.4304z m483.4816-134.6048l-18.176 177.9712h54.1184c4.8128-45.6192 9.728-90.7264 14.08-135.8848 0.6144-6.3488 2.3552-8.8576 8.704-9.0112 11.4176-0.256 22.8864-1.9968 34.304-1.536 23.7056 0.8192 42.3424 9.728 38.4 43.2128-2.9184 24.2688-5.632 48.5888-8.2944 72.9088-1.0752 10.0352-1.792 20.1728-2.7136 30.4128h55.296c3.584-35.2768 8.0384-70.0928 10.5472-104.96 3.3792-47.5136-17.7664-73.3696-64.7168-80.2816-40.96-5.9904-81.3056-0.3072-121.5488 7.168zM512 434.2784c-2.2016-0.6144-3.584-1.1776-4.9152-1.4336a349.696 349.696 0 0 0-113.664-2.816c-20.992 3.072-40.96 9.5232-57.4976 23.3472-22.9888 19.3024-21.6064 46.848 4.4032 62.0032 13.056 7.5776 28.0576 12.4928 42.5984 17.2544 14.08 4.608 29.0304 6.8608 43.1616 11.264 12.5952 3.9424 14.0288 14.336 3.584 22.3232a27.6992 27.6992 0 0 1-11.52 5.7856c-11.2128 1.792-22.7328 4.352-33.8432 3.584-24.064-1.792-48.0256-5.4784-72.5504-8.448L307.2 603.0336c4.1984 1.3824 7.68 2.7648 11.264 3.6352a274.944 274.944 0 0 0 102.912 5.12c20.0704-2.56 39.424-7.8848 56.6784-18.9952 28.6208-18.4832 36.7104-57.1904-4.6592-75.4176-14.4896-6.3488-30.208-10.3936-45.4656-15.0528-11.4176-3.4816-23.3472-5.632-34.56-9.5232-9.728-3.4304-11.1104-12.2368-3.0208-18.432 4.6592-3.5328 10.752-7.0144 16.384-7.3728 17.7664-1.28 35.584-1.536 53.4016-0.8192 15.36 0.6656 30.6176 3.584 46.4896 5.5296l5.376-37.376z m70.4512 142.2848c1.9968-20.9408 3.6352-39.3728 5.4272-57.8048 1.536-15.872 3.4304-31.744 4.7616-47.6672 0.3584-4.3008 1.536-6.656 5.9392-6.4 15.616 1.024 31.744 0 46.7456 3.6352 36.4544 8.8576 48.6912 54.272 23.3472 83.0464-15.872 17.92-36.7616 23.552-59.2896 25.088-8.448 0.512-16.9984 0.1024-26.9312 0.1024z m-53.4016 33.8944c34.8672 4.352 68.8128 5.12 102.7584 2.0992 23.04-2.048 44.8-8.3456 64.1536-21.9136 38.2464-26.7776 49.8176-85.1968 24.2688-123.0336-14.6432-21.7088-36.8128-30.3616-60.7744-35.4816-35.0208-7.5776-70.4512-5.7856-105.8304-3.4304-5.632 0.3584-6.7584 3.072-7.2192 8.192-3.072 32.7168-6.5536 65.3312-9.8304 97.9968-2.56 24.7808-4.9152 49.6128-7.5264 75.5712zM512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z"
                                    fill="#DD1700" p-id="9509"></path>
                            </svg>
                            <div id="csdn-tooltip-bottom" role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                我的 CSDN
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 分类列表 -->
                <div
                    class="text-sm font-medium text-gray-600 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <a href="#"
                        class="flex items-center w-full px-4 py-2 rounded-lg border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <svg class="w-3.5 h-3.5 mr-1.5 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.539 17h12.476l4-9H5m-2.461 9a1 1 0 0 1-.914-1.406L5 8m-2.461 9H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H16a1 1 0 0 1 1 1v2H5" />
                        </svg>
                        分布式
                    </a>
                    <a href="#"
                        class="flex items-center w-full px-4 py-2 rounded-lg border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <svg class="w-3.5 h-3.5 mr-1.5 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.539 17h12.476l4-9H5m-2.461 9a1 1 0 0 1-.914-1.406L5 8m-2.461 9H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H16a1 1 0 0 1 1 1v2H5" />
                        </svg>
                        微服务
                    </a>
                    <a href="#"
                        class="flex items-center w-full px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <svg class="w-3.5 h-3.5 mr-1.5 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.539 17h12.476l4-9H5m-2.461 9a1 1 0 0 1-.914-1.406L5 8m-2.461 9H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H16a1 1 0 0 1 1 1v2H5" />
                        </svg>
                        Docker 容器
                    </a>
                </div>

                <!-- 标签 -->
                <div
                    class="w-full p-5 mb-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <!-- 标签标题 -->
                    <h2 class="mb-2 font-bold text-gray-900 uppercase dark:text-white">标签</h2>
                    <!-- 标签列表 -->
                    <span
                        class="inline-block mb-1 cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">标签</span>
                    <span
                        class="inline-block mb-1 cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">标签</span>
                    <span
                        class="inline-block mb-1 cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">标签</span>
                    <span
                        class="inline-block mb-1 cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">标签</span>
                    <span
                        class="inline-block mb-1 cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">标签</span>
                    <span
                        class="inline-block mb-1 cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">标签</span>
                </div>
            </aside>
        </div>

        <!-- 分页 -->
        <nav aria-label="Page navigation example" class="mt-10 flex justify-center">
            <ul class="flex items-center -space-x-px h-10 text-base">
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Previous</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page"
                        class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Next</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </main>

    <Footer></Footer>
</template>

<script setup>
import Footer from '@/layouts/frontend/components/Footer.vue';
import Header from '@/layouts/frontend/components/Header.vue'
import { initTooltips } from 'flowbite'
import { onMounted } from 'vue'

// initialize components based on data attribute selectors
onMounted(() => {
    initTooltips();
})
</script>
