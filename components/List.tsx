import {  StyleSheet,View,ActivityIndicator,FlatList } from 'react-native';
import React, {useState,useEffect } from "react";
import {Breeds} from '../hooks/useApi';
import Card from './Card';
export default function List({}){  
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);
    const page = async () => {
        const respuesta = await Breeds();
        setData(respuesta);
        setLoading(false);
      };
    useEffect(() => {
        page();
      }, []);
    return (
        <View style={{ width:"100%", height: "100%",paddingHorizontal:10}}>
             {loading && <ActivityIndicator size="large" style={styles.loader} />}
             <FlatList
                data={data}
                renderItem={({item, index}) => (
                    <Card  key={index.toString()} item={item} />
                )}
            />
        </View>
    );

}
const styles = StyleSheet.create({
    loader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
  });
  