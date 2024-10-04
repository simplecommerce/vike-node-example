import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import vikeNode from 'vike-node/plugin'

const config: UserConfig = {
  plugins: [react(), vikeNode({
    entry: 'server/index.ts',
    standalone: true
  }), vike()]
}

export default config
