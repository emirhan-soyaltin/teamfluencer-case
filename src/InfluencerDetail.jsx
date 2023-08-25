
import { useParams } from 'react-router-dom';
import InstagramProfile from './components/InstagramProfile';
import TiktokProfile from './components/TiktokProfile';

const InfluencerDetail = ({ influencers }) => {
  const { influencerId } = useParams();
  const influencer = influencers.find(inf => inf.id === influencerId);

  if (!influencer) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="flex p-4 w-full shadow-lg bg-green-50 mt-4 ">
   
    <div className="max-w-2xl mr-4 w-1/3 float-left">
      <img
        src={influencer.profile_pic}
        alt={`${influencer.full_name}'s Profile`}
        className="w-48 h-48 mx-auto rounded-full object-cover"
      />
      <h2 className="mt-2 text-lg font-semibold text-center">{influencer.full_name}</h2>
      <p className="text-gray-600 text-center">@{influencer.id}</p>
     
    </div>

 <div className=" flex flex-grow items-center  text-center w-2/3 float-left">
        <div className="flex  ">
          {/* Personal Information */}
          <div className="mr-8">
            <h2 className="text-lg font-semibold mb-2">Personal Information</h2>

            <div className="mb-2">
              <span className="font-semibold">Age:</span> {influencer.age}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Gender:</span> {influencer.gender}
         </div>

            <div className="mb-2">
              <span className="font-semibold">Email:</span> {influencer.email}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Phone:</span> {influencer.phone}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Country:</span> {influencer.country}
        </div>

            <div className="mb-2">
              <span className="font-semibold">City:</span> {influencer.city}
        </div>
           
    </div>

           {/* Instagram Information */}
           <div className="mr-8">
            <h2 className="text-lg font-semibold mb-2">Instagram Information</h2>

            <div className="mb-2">
              <span className="font-semibold">Instagram Username:</span> {influencer.instagram_id}
         </div>

            <div className="mb-2">
              <span className="font-semibold">Followers:</span> {influencer.i_followers}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Following:</span> {influencer.following}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Average Likes:</span> {influencer.average_like}
         </div>

            <div className="mb-2">
              <span className="font-semibold">Biography:</span> {influencer.biography}
         </div>

            <div className="mb-2">
              <span className="font-semibold">Numbers of Post:</span> {influencer.post_number}
        </div>

     </div>
          {/* /* TikTok Information */ }
          <div>
            <h2 className="text-lg font-semibold mb-2">TikTok Information</h2>

            <div className="mb-2">
              <span className="font-semibold">Tiktok Username:</span> {influencer.tiktok_id}
         </div>

            <div className="mb-2">
              <span className="font-semibold">Followers:</span> {influencer.tt_followers}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Hearts:</span> {influencer.hearts}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Private Account:</span> {influencer.privateAccount ? 'Yes' : 'No'}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Verified:</span> {influencer.verified ? 'Yes' : 'No'}
        </div>

            <div className="mb-2">
              <span className="font-semibold">Numbers of Post:</span> {influencer.post_number}
        </div>

        </div>
    </div>
  </div>
</div>


    <div className='w-full mx-8 my-4'>

      <InstagramProfile influencer={influencer} />
    </div>
    
    <div className='w-full mx-8 my-4'>

      <TiktokProfile influencer={influencer} />
    </div>

</>
  );
};















export default InfluencerDetail;
