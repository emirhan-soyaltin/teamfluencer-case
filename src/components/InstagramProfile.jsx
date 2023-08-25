import React from "react";

const InstagramProfile = ({influencer}) => {
  return (
    <div className="bg-white shadow-lg">
      <nav class="border-b px-4 py-2 bg-white my-5">
        <div class="flex flex-wrap items-center justify-between md:justify-around">
          <img
            class="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
            alt="instagram"
          />

          <div class="space-x-4">
            <a
              class="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded"
              href="#"
            >
              Log In
            </a>
            <a
              class="inline-block text-blue-500 font-semibold text-sm"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      <main class="bg-gray-100 bg-opacity-25">
        <div class="lg:w-8/12 lg:mx-auto mb-8">
          <header class="flex flex-wrap items-center p-4 md:py-8">
            <div class="md:w-3/12 md:ml-16">
              <img
                width={200}
                height={200}
                class="rounded-full
                       border-2 border-pink-600 p-1"
                src={influencer.profile_pic}
                alt="profile"
              />
            </div>

            <div class="w-8/12 md:w-7/12 ml-4">
              <div class="md:flex md:flex-wrap md:items-center mb-4">
                <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {influencer.id}
                </h2>

                <span
                  class="inline-block fas fa-certificate fa-lg text-blue-500 
                                 relative mr-6 text-xl transform -translate-y-2"
                  aria-hidden="true"
                >
                  <i
                    class="fas fa-check text-white text-xs absolute inset-x-0
                                 ml-1 mt-px"
                  ></i>
                </span>

                <a
                  href="#"
                  class="bg-blue-500 px-2 py-1 
                          text-white font-semibold text-sm rounded block text-center sm:inline-block block"
                >
                  Follow
                </a>
              </div>

              <ul class="hidden md:flex space-x-8 mb-4">
                <li>
                  <span class="font-semibold">{influencer.post_number} </span>
                  posts
                </li>

                <li>
                  <span class="font-semibold">{influencer.followers} </span>
                  followers
                </li>
                <li>
                  <span class="font-semibold">{influencer.following} </span>
                  following
                </li>
                <li>
                  <span class="font-semibold">{influencer.average_like} </span>
                  Average Likes
                </li>
              </ul>

              <div class="hidden md:block">
                <h1 class="font-semibold">{influencer.fullname}</h1>
                <p>{influencer.biography}</p>
              </div>
            </div>

            <div class="md:hidden text-sm my-2">
              <h1 class="font-semibold">{influencer.fullname}</h1>
              <span>{influencer.biography}</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </header>

          <div class="px-px md:px-3">
            <ul
              class="flex md:hidden justify-around space-x-8 border-t 
                  text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span class="font-semibold text-gray-800 block">
                  {influencer.postNumber}{" "}
                </span>
                posts
              </li>

              <li>
                <span class="font-semibold text-gray-800 block">
                  {influencer.followers}{" "}
                </span>
                followers
              </li>
              <li>
                <span class="font-semibold text-gray-800 block">
                  {influencer.following}{" "}
                </span>
                following
              </li>
              <li>
                <span class="font-semibold text-gray-800 block">
                  {influencer.averageLike}{" "}
                </span>
                Average Like
              </li>
            </ul>

            <div class="flex flex-wrap -mx-px md:-mx-3">
              <div class="w-1/3 p-px md:px-3">
                <a href="#">
                  <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                    <img
                      class="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="image"
                    />

                    <i class="fas fa-square absolute right-0 top-0 m-1"></i>
                    <div
                      class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                  left-0 top-0 hidden"
                    >
                      <div
                        class="flex justify-center items-center 
                                      space-x-4 h-full"
                      >
                        <span class="p-2">
                          <i class="fas fa-heart"></i>
                          412K
                        </span>

                        <span class="p-2">
                          <i class="fas fa-comment"></i>
                          2,909
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>

              <div class="w-1/3 p-px md:px-3">
                <a href="#">
                  <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                    <img
                      class="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                      alt="image"
                    />

                    <div
                      class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                  left-0 top-0 hidden"
                    >
                      <div
                        class="flex justify-center items-center 
                                      space-x-4 h-full"
                      >
                        <span class="p-2">
                          <i class="fas fa-heart"></i>
                          120K
                        </span>

                        <span class="p-2">
                          <i class="fas fa-comment"></i>
                          3,909
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstagramProfile;