import './ClanPage.css';
import Layout from '../../components/Layout/Layout';
import NpcCard from '../../components/NpcCard/NpcCard';

function ClanPage() {
    return (
      <Layout>
        <h1>Clan Name</h1>
        <p className="clan-description">Description text here..</p>

        <div className="npc-list">
          <NpcCard 
          id="npc-name"
          name="Character 1" 
          description="Description here.." />
          <NpcCard name="Character 2" description="Description here.." />
        </div>
      </Layout>
    );
}

export default ClanPage;