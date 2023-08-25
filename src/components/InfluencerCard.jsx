import { Link } from 'react-router-dom';

const InfluencerCard = ({ full_name,name,id, profile_pic,tt_followers, i_followers, job , influencer }) => {
  return (
    <div className=" max-w-lg mx-8 my-8 bg-white rounded-lg overflow-hidden shadow-md text-center p-6 relative">

    <div className="relative">

      <img src={profile_pic} alt={`${name}'s Profile`} className="w-24 h-24 mx-auto rounded-full object-cover " />
     
    </div>

    <h2 className="mt-2 text-lg font-semibold">{full_name}</h2>

    <p className="text-gray-600">@{id}</p>

    <div className="mt-3">
      <p className="">Instagram: {i_followers}   followers</p>
      <p className="">TikTok: {tt_followers}   followers</p>
      <p className="">Job: {job}</p>
    </div>

    <Link to={`/influencer/${influencer.id}`} target='_blank' className='text-blue-500'>View Details</Link>
    
  </div>
  )
}

export default InfluencerCard