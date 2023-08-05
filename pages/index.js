import { useQuery } from "@apollo/client";
import recommendedProfilesQuery from "../queries/recommendedProfilesQuery.js";
import Profile from "../components/Profile.js";

export default function Home() {
  const { loading, error, data } = useQuery(recommendedProfilesQuery);

  if (loading || error || data.recommendedProfiles.length === 0) {
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
          { data && data.recommendedProfiles.length === 0 && (
            <p className="text-center text-slate-400">
               No recommended profiles found. Please check back later.
            </p>
          )
          }
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Banner Text */}
      <h3 className="text-center text-3xl mt-6 mb-3">
        Decentralized Twitter V0.1
      </h3>
      <p className="text-center text-gray-500">
        Powered by Recommended Profiles by the Lens Protocol
      </p>
      <p className="text-center text-gray-500 mb-4">#roadtoweb3 #alchemy</p>
      <hr></hr>

      {/* The Actual Profile Cards */}
      {data &&
        data.recommendedProfiles?.map((profile, index) => {
          // console.log(`Profile ${index}:`, profile);
          return (
            <>
              <Profile
                key={profile.id}
                profile={profile}
                displayFullProfile={false}
              />
            </>
          );
        })}
    </div>
  );
}
