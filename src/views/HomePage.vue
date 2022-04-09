<script setup lang="ts"></script>

<template>
  <main class="grow mb-8">
    <div class="divide-y divide-gray-200">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1
          class="text-3xl font-extrabold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-10"
        >
          Latest
        </h1>
        <p class="text-lg leading-7 text-gray-500">Our latest blog posts.</p>
      </div>
      <ul class="divide-y divide-gray-200">
        <li class="py-12">
          <article class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base font-medium leading-6 text-gray-500">
                <time datetime="Friday, May 15, 2020">Friday, May 15, 2020</time>
              </dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl font-bold tracking-tight leading-8">
                  <a class="text-gray-900" href="/posts/connecting-multiple-platforms"
                    >Connecting Multiple Platforms Together</a
                  >
                </h2>

                <div class="max-w-none text-gray-500 prose">
                  Your websites and mobile apps should seamlessly distribute content from a single Content Hub.
                </div>
              </div>
              <ul class="flex space-x-1">
                <li class="inline-block py-1 px-3 text-xs font-semibold text-white bg-blue-600 rounded-full">Notice</li>

                <li class="inline-block py-1 px-3 text-xs font-semibold text-white bg-blue-600 rounded-full">
                  Information
                </li>
              </ul>
              <div class="text-base font-medium leading-6">
                <a
                  class="text-purple-500 hover:text-purple-600"
                  aria-label='Read "Connecting Multiple Platforms Together"'
                  href="/posts/connecting-multiple-platforms"
                  >Read more →</a
                >
              </div>
            </div>
          </article>
        </li>
        <li class="py-12">
          <article class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base font-medium leading-6 text-gray-500">
                <time datetime="Wednesday, May 13, 2020">Wednesday, May 13, 2020</time>
              </dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl font-bold tracking-tight leading-8">
                  <a class="text-gray-900" href="/posts/graphql-schema-stitching">GraphQL Schema Stitching</a>
                </h2>
                <div class="max-w-none text-gray-500 prose">
                  Have you heard about schema stitching yet? Wonder what it is, when to use it or why? This is the post
                  to get you.
                </div>
              </div>
              <div class="text-base font-medium leading-6">
                <a
                  class="text-purple-500 hover:text-purple-600"
                  aria-label='Read "GraphQL Schema Stitching"'
                  href="/posts/graphql-schema-stitching"
                  >Read more →</a
                >
              </div>
            </div>
          </article>
        </li>
        <li class="py-12">
          <article class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base font-medium leading-6 text-gray-500">
                <time datetime="Tuesday, May 5, 2020">Tuesday, May 5, 2020</time>
              </dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl font-bold tracking-tight leading-8">
                  <a class="text-gray-900" href="/posts/technical-seo-with-graphcms">Technical SEO with GraphCMS</a>
                </h2>
                <div class="max-w-none text-gray-500 prose">
                  Get started with your SEO implementation when using a Headless CMS
                </div>
              </div>
              <div class="text-base font-medium leading-6">
                <a
                  class="text-purple-500 hover:text-purple-600"
                  aria-label='Read "Technical SEO with GraphCMS"'
                  href="/posts/technical-seo-with-graphcms"
                  >Read more →</a
                >
              </div>
            </div>
          </article>
        </li>
        <li class="py-12">
          <article class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base font-medium leading-6 text-gray-500">
                <time datetime="Friday, May 1, 2020">Friday, May 1, 2020</time>
              </dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl font-bold tracking-tight leading-8">
                  <a class="text-gray-900" href="/posts/union-types-and-sortable-relations"
                    >Union Types and Sortable Relations with GraphCMS</a
                  >
                </h2>
                <div class="max-w-none text-gray-500 prose">
                  Learn more about Polymorphic Relations and Sortable Relations with GraphCMS
                </div>
              </div>
              <div class="text-base font-medium leading-6">
                <a
                  class="text-purple-500 hover:text-purple-600"
                  aria-label='Read "Union Types and Sortable Relations with GraphCMS"'
                  href="/posts/union-types-and-sortable-relations"
                  >Read more →</a
                >
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </main>
</template>
