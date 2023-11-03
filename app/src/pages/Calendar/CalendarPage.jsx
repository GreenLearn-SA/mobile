import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8DC53D',
  },
};

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  const onDayPress = day => {
    setSelectedDate(day.dateString);
    if (events[day.dateString]) {
      setEditMode(true);
      setEditedEvent(events[day.dateString]);
      setEventTitle(events[day.dateString].title);
      setEventDescription(events[day.dateString].description);
    } else {
      setEditMode(false);
      setEditedEvent(null);
      setEventTitle('');
      setEventDescription('');
    }
  };

  const addOrUpdateEvent = () => {
    if (selectedDate && eventTitle && eventDescription) {
      const newEvent = {
        [selectedDate]: {
          selected: true,
          marked: true,
          dotColor: '#8DC53D',
          title: eventTitle,
          description: eventDescription,
        },
      };
      setEvents({ ...events, ...newEvent });
      setEventTitle('');
      setEventDescription('');
      setEditMode(false);
      setEditedEvent(null);
    }
  };

  const deleteEvent = () => {
    if (selectedDate) {
      const updatedEvents = { ...events };
      delete updatedEvents[selectedDate];
      setEvents(updatedEvents);
      setEventTitle('');
      setEventDescription('');
      setEditMode(false);
      setEditedEvent(null);
    }
  };

  const getEventDetails = () => {
    if (editedEvent) {
      const { title, description } = editedEvent;
      return (
        <View style={styles.eventDetails}>
          <Text style={styles.eventText}>Data do Evento: {selectedDate}</Text>
          <Text style={styles.eventText}>Título do Evento: {title}</Text>
          <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
            <View style={styles.descriptionDropdown}>
              <Text style={styles.descriptionText}>Descrição do Evento</Text>
              {showDescription && <Text style={styles.eventText}>{description}</Text>}
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Cronograma</Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            ...events,
            [selectedDate]: {
              selected: true,
              marked: true,
              dotColor: '#8DC53D',
            }
          }}
          style={{ height: 350, width: 300 }}
        />

        {getEventDetails()}

        {selectedDate && (
          <View style={styles.eventInputContainer}>
            <TextInput
              label="Título do Evento"
              value={eventTitle}
              onChangeText={text => setEventTitle(text)}
              style={styles.input}
            />
            <TextInput
              label="Descrição do Evento"
              value={eventDescription}
              onChangeText={text => setEventDescription(text)}
              style={styles.input}
            />
            <View style={styles.buttonContainer}>
              {editMode ? (
                <>
                  <TouchableOpacity onPress={addOrUpdateEvent} style={styles.button}>
                    <Icon name="check" size={30} color="#8DC53D" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={deleteEvent} style={styles.button}>
                    <Icon name="delete" size={30} color="#FF0000" />
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity onPress={addOrUpdateEvent} style={styles.button}>
                  <Icon name="plus" size={30} color="#8DC53D" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    color: '#161616',
  },
  eventDetails: {
    margin: 20,
    width: 300,
    paddingLeft: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#8DC53D',
    borderRadius: 5,
  },
  eventText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#161616',
  },
  descriptionDropdown: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8DC53D',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  descriptionText: {
    fontSize: 18,
    color: '#8DC53D',
    textAlign: 'left',
  },
  eventInputContainer: {
    width: '80%',
    marginVertical: 20,
  },
  input: {
    backgroundColor: 'transparent',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
});

export default CalendarPage;
