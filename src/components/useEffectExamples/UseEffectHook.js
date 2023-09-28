import { useEffect, useState } from "react"
import { Paragraph, Code } from '../styledComponents/StyledComponents'

export function UseEffectHook() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		setTimeout(
			() => { setCount(count + 1) }, 5000
		)
	},
		// []
	)

	return (
		<>
			<Paragraph>Open your console with <Code>Ctrl + shift + i</Code> to see <Code>useEffect</Code> in action.</Paragraph>
			<Paragraph>This count 👉 {count} will change after every 5 seconds 🔄 if dependencies are not added to it.</Paragraph>
			<Paragraph>📢 : If you want to change it only once uncomment "[ ]" from code.</Paragraph>
		</>
	)
}