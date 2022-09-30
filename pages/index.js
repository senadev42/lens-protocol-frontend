import { useQuery } from "@apollo/client";
import recommendedProfilesQuery from '../queries/recommendedProfilesQuery.js';
import Profile from '../components/Profile.js';

export default function Home() {
  const { loading, error, data } = useQuery(recommendedProfilesQuery);

  if (loading) return 'Loading..';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {/* Banner Text */}
      <h3 className="text-center text-3xl mt-6 mb-3">Decentralized Twitter V0.1</h3>
      <p className="text-center text-gray-500">Powered by Recommended Profiles by the Lens Protocol</p>
      <p className="text-center text-gray-500 mb-4" >#roadtoweb3 #alchemy</p>
      <hr></hr>

      {/* The Actual Profile Cards */}
      {data && data.recommendedProfiles?.map((profile, index) => {
        console.log(`Profile ${index}:`, profile);
        return <><Profile key={profile.id} profile={profile} displayFullProfile={false} /></>;
      })}
    </div>
  )
}