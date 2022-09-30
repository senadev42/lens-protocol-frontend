import Link from "next/link";


export default function Profile(props) {

  const profile = props.profile;
  const displayFullProfile = props.displayFullProfile;

  return (
    <div className="p-8">
      <Link href={`/profile/${profile.id}`}>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

          {/* Card Object */}
          <div className="md:flex hover:bg-gray-100">
            {/* Image */}
            <div className="md:shrink-0">
              {profile.picture ? (
                <img
                  src={
                    profile.picture.original
                      ? profile.picture.original.url
                      : profile.picture.uri
                  }
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              ) : (
                <div
                  style={{
                    backgrondColor: "gray",
                  }}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              )}
            </div>
            {/* Profile text */}
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold  ">
                {profile.handle}
                {displayFullProfile &&
                  profile.name &&
                  " (" + profile.name + ")"}
              </div>
              <div className="block mt-1 text-sm leading-tight font-medium text-black hover:text-gray-500 mb-4">
                {profile.bio}
              </div>
              {profile.attributes?.[0]?.key[0].toUpperCase() + profile.attributes?.[0]?.key.substring(1)}: {profile.attributes?.[0]?.value}
              <hr></hr>
              <div className="mt-2 text-sm text-slate-900 hover:text-gray-400">{profile.ownedBy}</div>
              <p className="mt-2 text-xs text-slate-500">
                following: {profile.stats.totalFollowing} |
                Followers:{" "}
                {profile.stats.totalFollowers} |
                Posts: {profile.stats.totalPosts} |
                Comments: {profile.stats.totalComments}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}