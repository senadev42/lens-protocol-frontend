// pages/profile/[id].js

import Link from "next/link";

import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { useState } from "react";

import fetchProfileQuery from "../../queries/fetchProfileQuery.js";

import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  const ITEM_LIMIT = 5;

  const [loadedItemCount, setLoadedItemCount] = useState(ITEM_LIMIT);

  console.log("fetching profile for", id);

  const { loading, error, data } = useQuery(fetchProfileQuery, {
    variables: {
      request: { profileId: id },
      publicationsRequest: {
        profileId: id,
        publicationTypes: ["POST"], // We  only want POSTs
      },
    },
  });

  if (loading || error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          {loading && (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mr-3"></div>
              <p className="text-lg font-semibold">Loading</p>
            </div>
          )}
          {error && (
            <p className="text-center text-red-500">
              <span className="text-lg font-semibold">Error:</span>{" "}
              {error.message}
            </p>
          )}
        </div>
      </div>
    );
  }

  // console.log("on profile page data: ", data);

  const itemsToRender = data.publications.items
    .slice(0, loadedItemCount)
    .map((post, idx) => {
      return <Post key={idx} post={post} />;
    });

  return (
    <div className="flex flex-col p-8 items-center ">
      {/* back home button */}

      <Link href={`/`}>
        <div class="border-b-2 border-gray-900 | hover:bg-gray-100 | cursor-pointer | mb-4 p-3 | self-start text-left sticky top-0">
          Return Home
        </div>
      </Link>

      {/* Their profile */}
      <Profile profile={data.profile} displayFullProfile={true} />

      {/* Their publications */}
      {itemsToRender}

      {/* Render the Load More button if there are more items to load */}
      {loadedItemCount < data.publications.items.length && (
        <button
          onClick={() => setLoadedItemCount(loadedItemCount + ITEM_LIMIT)}
          class="border-t-2 hover:bg-gray-100 border-gray-900 cursor-pointer | mb-4 p-3 | "
        >
          Load More
        </button>
      )}
    </div>
  );
}
