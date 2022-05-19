import { useEffect } from 'react'
import { firestore } from 'common/firebase'

import {
  atom, useRecoilState,
} from 'recoil'

export const zoomUserAtom = atom({
  key: 'zoomUserAtom',
  default: null,
})

export const useZoomUser = () => {
  const [user, setUser] = useRecoilState(zoomUserAtom)

  useEffect(() => {
    firestore.collection('users')
      .doc('0CIBUSDRLwTCzsWnACDYk2Uf0iD3')
      .onSnapshot((doc) => {
        if (doc.exists) {
          setUser(doc.data())
        } else {
          setUser(null)
        }
      })
  }, [])

  return user
}
