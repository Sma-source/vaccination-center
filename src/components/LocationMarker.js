import { Icon, InlineIcon } from "@iconify/react";
import vaccineIcon from "@iconify-icons/tabler/vaccine";

const LocationMarker = ({ lat, lng, onclick }) => {
  return (
    <div className="location-marker" onclick={onclick}>
      <Icon icon={vaccineIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
