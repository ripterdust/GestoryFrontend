import React from 'react'
import { getUrl } from '../helpers/apiRoute';
import { useFetch } from '../hooks/useFetch'

export const MainPage : React.FC = () => {

  const data = useFetch(getUrl(''));

  return (
    <div>MainPageasdf</div>
  )
}
