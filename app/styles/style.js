import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appWrapper: {
    flex: 1
  },
 headerStyle: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  backgroundColor: '#F7F7F7',
  borderBottomWidth: 0.5,
  borderColor: '#d6d7da',
 },
  headerTitle: {
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 25,
    paddingTop: 25,
    color: 'tomato'
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardLogo: {
    width:100,
    height:100
  },
  activityWrapper: {
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
  },
  activityIconContainer: {
    width: 20,
  },
  activityContainer: {
    maxWidth: 340,
  },
  newsDate: {
    fontFamily: 'monospace',
    fontStyle: 'italic',
    fontSize: 10,
    color: 'gray',
  },
  newsContent: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: 'gray',
  },
  screenTitle: {
    padding: 50,
  },
  titleText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    color: 'gray',
  },
  infoText: {
    paddingTop: 10,
    fontFamily: 'monospace',
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  calendarImg: {
    width: 300,
    height:180
  },
  calendarWrapper: {
    paddingTop: 20,
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: 'tomato',
  },
  buttonContainer: {
    paddingTop: 100,
  },
  inputsWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  feelingFace: {
    width: 150,
    height: 130,
  },
  dashConditionWrapper: {
    flexDirection: 'row',
  },
  dashFaceContainer: {
    padding: 20,
  },
  dashTitle: {
    paddingTop: 70,
    fontFamily: 'monospace',
    textAlign: 'left',
    fontSize: 18,
    color: 'gray',
  },
  dashCondition: {
    color: '#84D12D',
    fontSize: 20,
  },
  dashRisk: {
    color: '#84D12D',
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  dataField: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
  },
  activityCharts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fillChart: {
    width: 100,
    height: 100,
  },
  dataText: {
    fontFamily: 'monospace',
    textAlign: 'center',
    color: 'gray',
  },
  dataTitle: {
    fontFamily: 'monospace',
    color: 'gray',
  },
  dashRiskWrapper: {
    flexDirection: 'row',
  },
  iconWrapper: {
    paddingRight: 10,
  },
  dashOverallRisk: {
    width: 150,
  },
  deltaChanges: {
    width: 150,
  },
  deltaChange: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  graphStyles: {
    height: 100,
  },
});
