import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

const data = [
  {
    id: 1,
    transaction: 'deposit',
    money: 10.01,
    name: 'Elvis Presley',
    time: '2022-02-16 01:42:02'
  },
  {
    id: 2,
    transaction: 'deposit',
    money: 58.20,
    name: 'Bruce Springsteen',
    time: '2022-02-18 12:52:36'
  },
  {
    id: 3,
    transaction: 'withdraw',
    money: 5.99,
    name: 'Manager',
    time: '2022-02-27 17:11:12'
  },
  {
    id: 4,
    transaction: 'deposit',
    money: 210.52,
    name: 'Tom Scholz',
    time: '2022-03-10 11:17:05'
  },
  {
    id: 5,
    transaction: 'withdraw',
    money: 10.11,
    name: 'Manager',
    time: '2022-03-15 15:32:52'
  },
  {
    id: 6,
    transaction: 'deposit',
    money: 102.36,
    name: 'Paul McCartney',
    time: '2022-03-23 07:25:13'
  }
];

export default function TransactionTimeline() {
  return (
    <Timeline position="alternate">
      {data.reverse().map(item => {
        return (
          <TimelineItem key={item.id}>
            <TimelineSeparator>
              {item.transaction === 'withdraw'
                ? <TimelineDot color="secondary" />
                : <TimelineDot color="success" />
              }
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{item.name}({item.time}) : ${item.money}</TimelineContent>
          </TimelineItem>
        )})}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>Start</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}