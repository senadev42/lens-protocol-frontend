// pages/profile/[id].js

import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchProfileQuery from "../../queries/fetchProfileQuery.js";

import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("fetching profile for", id);
  const { loading, error, data } = useQuery(fetchProfileQuery, {
    variables: {
      request: { profileId: id },
      publicationsRequest: {
        profileId: id,
        publicationTypes: ["POST"], // We really only want POSTs
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

  console.log("on profile page data: ", data);
  return (
    <div className="flex flex-col p-8 items-center">
      <Profile profile={data.profile} displayFullProfile={true} />

      {data.publications.items.map((post, idx) => {
        return <Post key={idx} post={post} />;
      })}
    </div>
  );
}
