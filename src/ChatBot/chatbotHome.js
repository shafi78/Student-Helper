import { StyleSheet, Text, View , FlatList , TextInput} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import Loader from '../Loader';

const ChatbotHome = () => {

    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const apiKey = "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";
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions' ;
    const [textInput,setTextInput] = useState('');

    const handleSend = async () => {
      setLoading(true);
        const prompt = textInput
        const response = await axios.post(apiUrl,{
            prompt: prompt,
            max_tokens: 1024,
            temperature: 0.5,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });

        const text = response.data.choices[0].text;
        setLoading(false);
        setData([...data, {type: 'user', 'text': textInput} , {type: 'bot' , 'text': text}]);
        setTextInput('');
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI ChatBot</Text>
      
      {loading ? <Loader />
    :
    
    <FlatList
      showsVerticalScrollIndicator={true}
      data={data}
      keyExtractor={(item,index) => index.toString()}
      style={styles.body}
      renderItem={({item}) => (
        <View style={styles.box}>
            <Text style={{fontWeight: 'bold',backgroundColor: '#F5F5F5',marginLeft: 10,fontSize: 16,color: item.type === 'user' ? 'red' : 'green'}}>{item.type === 'user' ? 'You :' : 'Bot :'}</Text>
            <Text style={styles.bot}>{item.text}</Text>
        </View>
      )}
      />
    
    }

      <TextInput 
      style={styles.input}
      value={textInput}
      onChangeText={text => setTextInput(text)}
      placeholder='Ask me Something...'
      />

      <TouchableOpacity
      style={styles.button}
      onPress={handleSend}
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChatbotHome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      marginTop: 2
    },

    title: {
        fontSize: 30,
        fontWeight: '400',
        width: '100%',
        textAlign: 'center',
        padding: 15,
        alignItems: 'center',
        letterSpacing: 1,
        marginBottom: 10,
        color: 'darkblue',
        borderColor: 'darkblue',
        borderWidth: 1,
        backgroundColor: 'snow',

    },

    body: {
        width: '100%',
        margin: 10,
    },

    bot: {
        fontSize: 16,
        width: '90%',
        paddingLeft: 10,
    },

    box: {
        flexDirection: 'row',
        padding: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        height: 70,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },

    button: {
        backgroundColor: 'aliceblue',
        width: '30%',
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1

    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkblue',
    }
  });