import { IllustrationsProvider } from '../providers/IllustrationsProvider';
import IllustrationsContent from '../components/IllustrationsContent';

function Illustrations() {
  return (
    <IllustrationsProvider>
      <IllustrationsContent />
    </IllustrationsProvider>
  );
}

export default Illustrations;
