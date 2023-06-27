import { IllustrationsProvider } from '../providers/Illustrations';
import IllustrationsContent from '../components/IllustrationsContent';

function Illustrations() {
  return (
    <IllustrationsProvider>
      <IllustrationsContent />
    </IllustrationsProvider>
  );
}

export default Illustrations;
