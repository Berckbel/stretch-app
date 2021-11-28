import { useState } from "react";
import { takeResource } from "../services/takeResource";
import { useUser } from "../hooks/useUser";

export const useResource = ({ stretch }) => {
  const { auth } = useUser();

  const initialState = () => {
    if (stretch.get_users_id.filter((id) => id === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };
  
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(initialState);
  const [data, setData] = useState(stretch);

  const handleEmpty = () => {
    if (stretch.get_users_id.filter((id) => id === auth.user.id).length > 0) {
      setLoading(true)
      takeResource({
        access: auth.access,
        stretch_id: stretch.id,
        user_id: auth.user.id,
      });
      setData({
        ...data,
        moto_count: data.moto_count + 1,
      });
      setLoading(false)
      setSelected(false);
    }
  };

  const handleClick = () => {
    setLoading(true)
    takeResource({
      access: auth.access,
      stretch_id: stretch.id,
      user_id: auth.user.id,
    });
    if (selected) {
      setData({
        ...data,
        moto_count: data.moto_count + 1,
      });
    } else {
      setData({
        ...data,
        moto_count: data.moto_count - 1,
      });
    }
    setLoading(false)
    setSelected(!selected);
  };

  return {
      selected,
      data,
      loading,
      handleEmpty,
      handleClick
  }
};
