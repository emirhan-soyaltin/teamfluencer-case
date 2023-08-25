import React from "react";

const TiktokProfile = ({
    influencer
}) => {
  return (
    <div className="bg-white pb-7 shadow-lg">
      <div className="flex flex-col justify-center items-center my-5 py-3">
        <div className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full">
          {" "}
          <img
            width={200}
            height={200}
            class="rounded-full
                       border-2 border-pink-600 p-1"
            src={influencer.profile_pic}
            alt="profile"
          />
        </div>
        <span className="my-3">{influencer.tiktok_id}</span>

        <div className="flex gap-10 text-sm">
          <div className="flex flex-col items-center">
            <span className="font-bold">{influencer.following}</span>
            <span>Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">{influencer.followers}</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">{influencer.hearts}</span>
            <span>Likes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">{influencer.average_like}</span>
            <span>Average Likes</span>
          </div>
        </div>

        <button className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400">
          Edit profile
        </button>

        <p>{influencer.biography}</p>
      </div>

      <div className="grid grid-cols-4">
        <button className="mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
        </button>
        <button className="mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
        <button className="mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </button>
        <button className="mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TiktokProfile;