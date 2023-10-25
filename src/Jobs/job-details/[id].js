import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../components";

import { COLORS, icons, SIZES } from "../constants";
const tabs = ["About", "Qualifications", "Responsibilities"];


const JobDetails = ({route}) => {
  
  const navigation = useNavigation();
  const [activeTab,setActiveTab] = useState(tabs[0]);

  const data = route.params ;

  const displayTabContent = () => {
        switch (activeTab) {
          case "Qualifications":
            return (
              <Specifics
                title='Qualifications'
                points={data.job_highlights?.Qualifications ?? ["N/A"]}
              />
            );
    
          case "About":
            return (
              <JobAbout info={data.job_description ?? "No data provided"} />
            );
    
          case "Responsibilities":
            return (
              <Specifics
                title='Responsibilities'
                points={data.job_highlights?.Responsibilities ?? ["N/A"]}
              />
            );
    
          default:
            return null;
        }
      };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <ScrollView style={styles.container}>
      <Company
      companyLogo={data.employer_logo}
      jobTitle={data.job_title}
      companyName={data.employer_name}
      location={data.job_country}
      />


              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

{displayTabContent()}

      
    </ScrollView>
    <JobFooter url={data?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
    </SafeAreaView>
  )
}

export default JobDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // marginTop: 50,
    marginBottom: 100
  }
})