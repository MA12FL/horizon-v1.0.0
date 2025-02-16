import Grid from '@mui/material/Grid';
import Calendar from 'components/sections/dashboard/calendar';
import Analytics from 'components/sections/dashboard/analytics';
import TotalSpent from 'components/sections/dashboard/total-spent';
import CardSecurity from 'components/sections/dashboard/card-security';
import ComplexTable from 'components/sections/dashboard/complex-table';
import PiChart from 'components/sections/dashboard/your-pi-chart';
import History from 'components/sections/dashboard/history';
import Revenue from 'components/sections/dashboard/revenue';
import Tasks from 'components/sections/dashboard/tasks';
import TeamMembers from 'components/sections/dashboard/team-members';
import DailyTraffic from 'components/sections/dashboard/daily-traffic';
import TrendingNFTs from 'components/sections/dashboard/trending-nfts';
import BusinessDesign from 'components/sections/dashboard/business-design';

const Dashboard = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12}>
        <Analytics />
      </Grid>
      <Grid item xs={12} md={6}>
        <TotalSpent />
      </Grid>
      <Grid item xs={12} md={6}>
        <Revenue />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CardSecurity />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Tasks />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <DailyTraffic />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <PiChart />
      </Grid>
      <Grid item xs={12} lg={8} xl={6}>
        <TrendingNFTs />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <History />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Calendar />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <BusinessDesign />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <TeamMembers />
      </Grid>
      <Grid item xs={12} lg={8} xl={6}>
        <ComplexTable />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
