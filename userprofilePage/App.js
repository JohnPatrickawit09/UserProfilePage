import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <View style={styles.container}>
   
      <View style={styles.profilePictureOuterContainer}>
      <Image 
  source={require('./assets/pfp.jpg')}
  style={styles.profilePicture} 
/>

      </View>

    
      <View style={styles.divider} />

     
      <Text style={styles.name}>John Patrick S. Awit</Text>
      <Text style={styles.email}>awitjohnpatrick@gmail.com</Text>
      <Text style={styles.bio}>
        RAAAAAAAAAAAAAAAAWR
      </Text>

      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  profilePictureOuterContainer: {
    backgroundColor: '#e0e0e0', 
    borderRadius: 100, 
    padding: 10, 
    marginBottom: 15,
    alignItems: 'center', 
  },
  profilePicture: {
    width: 130, 
    height: 130,
    borderRadius: 65,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#888',
    marginBottom: 15,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  navContainer: {
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: 30,
    width: '80%',
  },
  navButton: {
    backgroundColor: '#4a90e2', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 5, 
    width: '100%', 
    alignItems: 'center', 
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center', 
  },
  logoutButton: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 10,
    shadowColor: '#ff6b6b',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: '100%', 
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center', 
  },
});
