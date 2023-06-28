import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {Alert, Modal, Pressable, Image} from 'react-native';


export default function Scanner({route,navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState('')
  const [modalVisible, setModalVisible] = useState(false);


  const {token} = route.params ;

  

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const getUserDetails = async (userId,token) => {

    console.log("network call",userId,token)

    console.log(JSON.stringify(token))

    console.log(typeof(token))
    
    console.log(typeof(JSON.stringify(token)))

    try {
      const res = await fetch(
        `https://bitotsavbackend-production.up.railway.app/api/v1/users/verifyEntry/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );


      const data1 = await res.json();
      console.log(data1); 

      setData(data1)

      

      if (data1.status == "success") {
        console.log("success");
      
      }
      // setLoading(false);
    } catch (err) {
      console.log(err);
      // alert(err.message);
      // setLoading(false);
    }
  };



  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    let len = data.length;
    data = data.slice(31,len);

  getUserDetails(data,token);

    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setModalVisible(true)

    

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          {data.status=="success" && <Image  style={styles.logo} source={require('../assets/yes.png')} />}
          {data.status=="error" && <Image  style={styles.logo} source={require('../assets/no.png')} />}
            <Text style={styles.modalText}>{data.message}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>  OK   .</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      
 


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
   
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    width: '40%',
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});