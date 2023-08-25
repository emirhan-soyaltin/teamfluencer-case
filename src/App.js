import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import InfluencerCard from './components/InfluencerCard';
import InfluencerDetail from './InfluencerDetail';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const App = () => {
  const [influencers, setInfluencers] = useState([]);
  const [sortedInfluencers, setSortedInfluencers] = useState([]);
  const [showVerified, setShowVerified] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVerifiedInfluencers, setFilteredVerifiedInfluencers] = useState([]);
  const [filteredSearchInfluencers, setFilteredSearchInfluencers] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyBsO9uecpvlK4pFnm5eCMHrMrk0xi32fPg",
    authDomain: "teamfluencer-influencers.firebaseapp.com",
    projectId: "teamfluencer-influencers",
    storageBucket: "teamfluencer-influencers.appspot.com",
    messagingSenderId: "735448328293",
    appId: "1:735448328293:web:4f32af09fc24216e37be8c",
    measurementId: "G-9Q49DGZ1WH"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  // Init services
  const db = getFirestore();

  // Collection ref
  const colRef = collection(db, 'influencers');

  useEffect(() => {
    // Get collection data
    getDocs(colRef)
      .then((snapshot) => {
        let fetchedInfluencers = [];
        snapshot.forEach((doc) => {
          fetchedInfluencers.push({ ...doc.data(), id: doc.id });
        });

        setInfluencers(fetchedInfluencers);

        setSortedInfluencers(fetchedInfluencers); 

        setFilteredVerifiedInfluencers(fetchedInfluencers);

        setFilteredSearchInfluencers(fetchedInfluencers);

      })
      .catch((err) => {

        console.log(err);
      });
  }, []);

  const handleVerifiedFilter = () => {
    setShowVerified(!showVerified);
  };



  useEffect(() => {
    const filtered = showVerified
      ? sortedInfluencers.filter((influencer) => influencer.verified)
      : sortedInfluencers;
    setFilteredVerifiedInfluencers(filtered);
  }, [showVerified, sortedInfluencers]);



  const handleSort = () => {
    const sorted = [...sortedInfluencers]; // Create a copy to avoid modifying state directly
    sorted.sort((a, b) => b.followers - a.followers); // Sort descending by Instagram followers
    setSortedInfluencers(sorted);
  };


// getting verified sort 
  const getFilteredInfluencers = () => {
    let filtered = showVerified
      ? sortedInfluencers.filter((influencer) => influencer.verified)
      : sortedInfluencers;

    filtered = filtered.filter((influencer) =>
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.keywords.some(keyword =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    return filtered;
  };



  const filteredInfluencers = getFilteredInfluencers();




  useEffect(() => {
    const filtered = influencers.filter((influencer) =>
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.keywords.some(keyword =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredSearchInfluencers(filtered);
  }, [searchTerm, influencers]);



  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/influencer/');






  return (
    <>
    <Navbar />
    {!isDetailPage && (
        <div className='flex flex-wrap justify-start items-center space-x-4 mb-4'>
          <button onClick={handleSort} className='bg-blue-500 text-white py-2 px-4 rounded'>
            Sort by Instagram Followers
          </button>
          <button onClick={handleVerifiedFilter} className='bg-green-500 text-white py-2 px-4 rounded'>
            {showVerified ? 'Show All' : 'Show Verified'}
          </button>
          <div className='flex-grow'>
            <SearchBar onSearch={setSearchTerm} />
          </div>
        </div>
      )}
    <div className='flex flex-wrap'>
      <Routes>
       
        <Route path='/' element={filteredInfluencers.map((influencer, index) => (
          <InfluencerCard key={index} {...influencer}  influencer={influencer}/>
        ))} />
       
        <Route path='/influencer/:influencerId' element={<InfluencerDetail influencers={filteredInfluencers} />} />
      </Routes>
    </div>
  </>

  );
};

export default App;
