import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import LoginScreen from './src/Login/LoginScreen';
import Userprofile from './src/Login/Userprofile';
import LogoutPage from './src/Login/LogoutPage';
import SignupScreen from './src/Login/SignupScreen';
import QNACategory from './src/QNA/QNACategory';
import QNAHome from './src/QNA/QNAHome';
import WebinarHome from './src/Webinar/WebinarHome';
import ChatbotHome from './src/ChatBot/chatbotHome';
import BlogsHome from './src/Blogs/BlogsHome';
import AddBlog from './src/Blogs/AddBlog';
import AptHome from './src/Aptitude/AptHome';
import AptCategory from './src/Aptitude/AptCategory';
import AptQuiz from './src/Aptitude/AptQuiz';
import AptContest from './src/Aptitude/AptContest';
import DSAHome from './src/DSA/DSAHome';
import DSACategory from './src/DSA/DSACategory';
import DSAQNA from './src/DSA/DSAQNA';
import DSAContest from './src/DSA/DSAContest';
import CourseHome from './src/Courses/CourseHome';
import CoursePage from './src/Courses/CoursePage';
import CourseChapter from './src/Courses/CourseChapter';
import JobsHome from './src/Jobs/JobsHome';
import JobDetails from './src/Jobs/job-details/[id]';
import JobSearch from './src/Jobs/search/[id]';
import AptLeader from './src/Aptitude/AptLeader';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' component={LoginScreen}>
        <Stack.Screen name='login' component={LoginScreen}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name='signup' component={SignupScreen}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name='home' component={Home}
        options={{
          headerShown: false,
        }} 
        />

        <Stack.Screen name="userprofile" component={Userprofile} 
        options={{
        headerShown: false,
        }}
        />
        
        <Stack.Screen name="logout" component={LogoutPage} 
        options={{
        headerShown: false,
        }}
        />

        {/* QNA Section */}

        <Stack.Screen name='qnacat' component={QNACategory}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen name='qnahome' component={QNAHome}
        options={{
          headerShown: false,
        }} 
        />

        {/* Webinar Section */}

        <Stack.Screen name='webinars' component={WebinarHome}
        options={{
          headerShown: false,
        }} 
        />
        
        
        {/* Blogs Section */}

        <Stack.Screen name='blogs' component={BlogsHome}
        options={{
          headerShown: false,
        }} 
        />
        
        <Stack.Screen name='addblog' component={AddBlog}
        options={{
          headerShown: false,
        }} 
        />

        {/* Aptitude Section */}

        <Stack.Screen name='aptitude' component={AptHome}
        options={{
          headerShown: false,
        }} 
        />
        
        <Stack.Screen name='aptcategory' component={AptCategory}
        options={{
          headerShown: false,
        }} 
        />
        
        
        <Stack.Screen name='aptcontest' component={AptContest}
        options={{
          headerShown: false,
        }} 
        />
        
        
        <Stack.Screen name='aptleaderboard' component={AptLeader}
        options={{
          headerShown: false,
        }} 
        />
        
        <Stack.Screen name='AptQuiz' component={AptQuiz}
        options={{
          headerShown: false,
        }} 
        />


        {/* DSA Section */}

         <Stack.Screen name='dsa' component={DSAHome}
        options={{
          headerShown: false,
        }} 
        />

        <Stack.Screen name='dsacategory' component={DSACategory}
        options={{
          headerShown: false,
        }} 
        />

        <Stack.Screen name='dsacontest' component={DSAContest}
        options={{
          headerShown: false,
        }} 
        />

        <Stack.Screen name='DSAQNA' component={DSAQNA}
        options={{
          headerShown: false,
        }} 
        />


        {/* Courses */}

         {/* ChatBot Section */}

         <Stack.Screen name='courses' component={CourseHome}
        options={{
          headerShown: false,
        }} 
        />
         
         <Stack.Screen name='coursepage' component={CoursePage}
        options={{
          headerShown: false,
        }} 
        />
         
         <Stack.Screen name='courseChapter' component={CourseChapter}
        options={{
          headerShown: false,
        }} 
        />



        {/* Jobs Section */}

        <Stack.Screen name='jobs' component={JobsHome}
        options={{
          headerShown: false,
        }} 
        />
        
        <Stack.Screen name='jobdetails' component={JobDetails}
        options={{
          headerShown: false,
        }} 
        />
        
        <Stack.Screen name='searchpage' component={JobSearch}
        options={{
          headerShown: false,
        }} 
        />



        {/* ChatBot Section */}

        <Stack.Screen name='chatbot' component={ChatbotHome}
        options={{
          headerShown: false,
        }} 
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
