import { IllustrationsProvider } from '../providers/illustrations';
import IllustrationsContent from '../components/IllustrationsContent';

function Illustrations() {
  return (
    <IllustrationsProvider>
      <IllustrationsContent />
    </IllustrationsProvider>
  );
}

export default Illustrations;
