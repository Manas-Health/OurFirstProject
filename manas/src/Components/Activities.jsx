import React,{useContext} from 'react'
import ContextApi from './ContextApi'
import { Navigate } from 'react-router-dom'
const Activities = () => {
  const { tokens } = useContext(ContextApi)

  if (!tokens.token) {
      return <Navigate to='/' />
  }
  return (
    <div className='activities'>
      <h1 className='hinac'>Activites which can relief your Mental-Health</h1>
        <dl className="def">
          <span>
            <dt><b>Journaling:</b></dt>
            <dd>Write down your thoughts and feelings. Journaling can help you gain clarity, identify stress triggers, and find solutions to problems.</dd>

          </span>
          <span>
            <dt><b>Art and Creativity:</b></dt>
            <dd>Engage in creative activities such as drawing, painting, or crafting. The process of creating art can be therapeutic and provide an outlet for expression.</dd>

          </span>
          <span>
            <dt><b>Listening to Music:</b></dt>
            <dd>Music has the power to influence mood. Create playlists of your favorite calming or uplifting songs and listen to them when you need a break.</dd>

          </span>
          <span>
            <dt><b>Reading:</b></dt>
            <dd>Escape into a good book. Reading can transport you to different worlds, providing a mental break from stressors.</dd>

          </span>
          <span>
            <dt><b>Socializing:</b>
            </dt>
            <dd>Spend time with friends and family. Social support is crucial for managing stress, and spending time with loved ones can provide comfort and distraction.</dd>

          </span>
          <span>
            <dt><b>Mindfulness and Mindful Activities:</b></dt>
            <dd>Practice mindfulness by being fully present in the moment. This can be achieved through activities like mindful walking, eating, or even washing dishes.</dd>

          </span>
          <span>
            <dt><b>Aromatherapy:</b></dt>
            <dd>Use scents like lavender, chamomile, or eucalyptus to create a calming atmosphere. Essential oils or scented candles can be effective.</dd>

          </span>
          <span>
            <dt><b>Laughing:</b></dt>
            <dd>Laughter is a natural stress reliever. Watch a funny movie, attend a comedy show, or spend time with people who make you laugh.</dd>

          </span>
          <span>
            <dt><b>Nature Walks:</b></dt>
            <dd>Spending time in nature has been shown to reduce stress. Take a walk in a park, hike, or simply sit in a garden to enjoy the calming effects of nature.</dd>

          </span>
          <span>
            <dt><b>Hobbies:</b></dt>
            <dd>Engage in activities you love, whether it's gardening, cooking, playing a musical instrument, or any other hobby that brings you joy.</dd>

          </span>
          <span>
            <dt><b>Progressive Muscle Relaxation:</b></dt>
            <dd>Tense and then release each muscle group in your body to promote relaxation. This can be done through guided exercises or independently.</dd>
          </span>
        </dl>
    </div>
  )
}

export default Activities


