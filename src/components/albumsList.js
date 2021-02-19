import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import AlbumCard from './albumCard';

const AlbumsList = ({navigation}) => {

  const [albums, setAlbums] = useState({});

  useEffect(() => {
    async function getAlbums() {
      const result = await axios.get('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json');
      setAlbums(result.data);
    }

    getAlbums();
  }, []);

  const handleShowMusics = (album) => {
    navigation.push('AlbumModal', {musics: album.links.tracks, albumName: album.name, artist: album.artist})
  }

  const renderItem = ({ item }) => {
    return (
      <AlbumCard album={item} showModal={handleShowMusics}/>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={albums.albums}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default AlbumsList;