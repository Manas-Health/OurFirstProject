
import ContextApi from './ContextApi';
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import '../Css/home.css'
const Aware = () => {
  const { tokens } = useContext(ContextApi);
  if (!tokens.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className='awareness'>
      <div className='aware1'>
        <span>Awareness</span>
      </div>
      <div className="whatismentalhealth">
        <h1>What is Mental Health</h1>
        <p><b>Mental health</b> encompasses the overall well-being of an individual's psychological and emotional state. It involves the ability to cope with the normal stresses of life, maintain fulfilling relationships, work productively, and make meaningful contributions to society. Stress, anxiety, and depression are common components of mental health that can significantly impact one's daily life and functioning.</p>
        <h3>Mental Conditions</h3>
        <p><b>Stress</b> is the body's natural response to demands or pressures, which can arise from various sources such as work, relationships, or financial issues. While some stress can be motivational, excessive or prolonged stress can lead to negative consequences on mental and physical health.</p>
        <p><b>Anxiety </b>is characterized by feelings of worry, nervousness, or fear that are disproportionate to the situation at hand. It can manifest as generalized anxiety disorder, panic disorder, phobias, or other forms, and may interfere with daily activities and relationships if left untreated.</p>
        <p>
          <b>Depression </b>is a mood disorder that causes persistent feelings of sadness, hopelessness, and loss of interest in activities once enjoyed. It can affect sleep, appetite, energy levels, and overall functioning, leading to significant impairment in daily life. Major depressive disorder, persistent depressive disorder, and other variations of depression are common diagnoses.</p>
        <p>These mental health challenges often coexist and can be influenced by biological, psychological, and environmental factors. Seeking professional help, practicing self-care, engaging in therapy or counseling, maintaining a supportive network, and adopting healthy coping mechanisms are essential for managing stress, anxiety, and depression.
          Additionally, lifestyle factors such as regular exercise, adequate sleep, nutritious diet, mindfulness practices, and avoiding substance abuse can contribute to overall mental well-being. It's important to recognize the signs and symptoms of these conditions, destigmatize seeking help, and prioritize mental health as a vital aspect of overall wellness.
        </p>

      </div>
      <div className='aware2'>
        <img className='imgbvideo' src="https://tse3.mm.bing.net/th?id=OIP.5gkrQkrHkFtrfSyg0wjAfgHaE8&pid=Api&P=0&h=180" alt="" />
        <iframe className="video" width="640" height="360" src="https://www.youtube.com/embed/G0M41N1Lyw4" title="What is Mental Health? A video for mental health awareness" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
        <img className='imgbvideo' src="https://tse1.mm.bing.net/th?id=OIP.zHOBmlpWvqSFVweNSFiLpwHaE8&pid=Api&P=0&h=180" alt="" />
      </div>
      <div className='aware2'>
        <img src="https://preview.redd.it/signs-of-anxiety-v0-vx9sak5xpcy91.png?auto=webp&s=4929d36e2a951581ce1b46038f4f52625eb5b182" alt="Anxiety Symptoms" height={370} width={440} />
        <p>Mental anxiety is a complex emotional state characterized by heightened unease, worry, and fear. Unlike temporary stress, anxiety often persists over time, impacting various facets of an individual's life. Common symptoms include restlessness, irritability, and an overwhelming sense of dread. Physiologically, anxiety can manifest in symptoms such as increased heart rate, muscle tension, and difficulty concentrating.

          The cognitive aspects of anxiety involve persistent negative thoughts and a heightened awareness of potential threats, leading to a cycle of apprehension. Sleep disturbances and changes in appetite are common, further influencing one's overall well-being. Anxiety can vary in intensity, ranging from mild discomfort to debilitating panic attacks.

          Understanding the triggers and underlying causes of anxiety is crucial for effective management. Professional interventions, such as therapy and counseling, provide tools to navigate anxious thoughts and behaviors. Mindfulness techniques, meditation, and deep-breathing exercises are valuable self-help strategies that empower individuals to regain control over their mental state.

          Social support plays a pivotal role in alleviating anxiety, fostering a sense of connection and understanding. Medication may be considered in severe cases. Recognizing the dynamic nature of anxiety and the importance of seeking help are essential steps towards building resilience and achieving mental equilibrium. By embracing a holistic approach to mental health, individuals can cultivate strategies to manage anxiety and lead a more balanced and fulfilling life.





        </p>
      </div>
      <div className='aware2'>
        <img src="https://www.verywellmind.com/thmb/_3b1bgxia1botnCMFRftK9MyVyU=/1100x0/filters:no_upscale():max_bytes(150000):strip_icc()/1066910-top-depression-symptoms-5ae724e38023b90036653091.png" alt="Depression Symptoms" height={370} width={400} />
        <p>Mental depression is a profound and pervasive condition that deeply impacts an individual's emotional and cognitive well-being. It is characterized by persistent feelings of sadness, hopelessness, and a loss of interest in activities that were once pleasurable. Depression extends beyond mere mood fluctuations, often affecting sleep patterns, appetite, and energy levels. Individuals may experience a sense of emptiness or worthlessness, contributing to a negative self-perception.

          Cognitively, depression can lead to difficulties in concentration and decision-making, amplifying feelings of frustration. Physical symptoms, such as fatigue and changes in weight, accompany the emotional and cognitive aspects. The interplay of these dimensions underscores the holistic nature of depression, affecting the mind and body alike.

          Recognizing the symptoms of depression is crucial for early intervention. Seeking professional help, such as therapy or counseling, is vital in developing coping strategies and exploring the root causes of depression. Medication may also be recommended in certain cases. Lifestyle modifications, including regular exercise, a balanced diet, and social engagement, play a pivotal role in alleviating depressive symptoms.

          Building a robust support system and fostering open communication are integral components of managing depression. Understanding that recovery is a gradual process, marked by setbacks and progress, is key. By addressing depression comprehensively and compassionately, individuals can embark on a journey toward mental well-being and a more fulfilling life.





        </p>

      </div>
      <div className='aware2'>

        <img src="https://tse4.mm.bing.net/th?id=OIP.2EPCdgReTSVB-YVfu0o53gHaEK&pid=Api&P=0&h=180" alt="Stress Symptoms" height={370} width={400} />
        <p>Mental health stress is a complex and pervasive phenomenon that arises from various life stressors. It affects individuals differently, manifesting in emotional, physical, and behavioral symptoms. Emotionally, stress can lead to feelings of anxiety, fear, or a sense of being overwhelmed. Physically, it often presents itself through headaches, muscle tension, and fatigue, reflecting the interconnectedness of the mind and body. Behavioral changes may include altered sleep patterns, changes in appetite, or difficulty concentrating.

          The symptoms of stress serve as signals, urging individuals to pay attention to their mental well-being. Ignoring these signals can exacerbate the impact of stress on overall health. Recognizing the importance of stress management is crucial. Seeking support from friends and family, engaging in regular exercise, adopting mindfulness practices, and ensuring adequate sleep are effective strategies. Professional assistance, such as counseling or therapy, can provide valuable coping mechanisms.

          Moreover, lifestyle adjustments, including time management, setting realistic goals, and practicing self-compassion, contribute significantly to stress reduction. Identifying specific stressors and developing coping mechanisms tailored to individual needs enhances resilience. Cultivating a supportive social network and fostering open communication also play pivotal roles in maintaining mental well-being. In essence, understanding and managing stress is a holistic endeavor that encompasses emotional, physical, and behavioral dimensions, promoting a balanced and healthier life.
        </p>

      </div>

      <div className='books'>
        <h1>Here are top Recommended Books for Mental Health</h1>
        <div>
          <a href="https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748">          <img src="https://tse1.mm.bing.net/th?id=OIP.ZfgNyuqUIgmREz6IiF7wYAHaLL&pid=Api&P=0&h=180" alt="" />
          </a>
          <a href="https://www.amazon.in/Feeling-GooD-New-Mood-Therapy/dp/0380810336">          <img src="https://tse2.mm.bing.net/th?id=OIP.x2b_Vx0HEuvSWjJCPNplTwAAAA&pid=Api&P=0&h=180" alt="" />
          </a>
          <a href="https://www.amazon.in/Noonday-Demon-Atlas-Depression/dp/1501123882/ref=sr_1_1?crid=KLTCNG9CYGM9&dib=eyJ2IjoiMSJ9.hcOVZWoH3srk1ia-gxAhjGYsuE7bWf9hQ-GP-sXm7yBiIwWYorQepN9dkxPSN3R68l9rnaBjCd0_5m6QQpz613-hy3_NzGN22LLS7nbBGyxVwQaywmigrJvnrZDg7-cYAkcIgqPDMqkTf51ZZzlqPfSt9quvm4kl7AsIZiHiKIh-rQkfCQKcGppSXUZaI_vtLT7J1OSrAlaBIKvm05W9Yd970VyhiuU8ztdf4O39qco.8UEQcYRYFsYTJHv45Dn4VAwJKwglJuaOvWfEyoSNf-s&dib_tag=se&keywords=an+atlas+of+depression&qid=1709477156&s=books&sprefix=an+atlas+of+depressio%2Cstripbooks%2C311&sr=1-1">          <img src="https://tse1.mm.bing.net/th?id=OIP.NTuhfyLAJmXr-wBXiaPYqwHaJ4&pid=Api&P=0&h=180" alt="" />
          </a>
          <a href="https://www.amazon.in/Unquiet-Mind-Madness-Picador-Classic/dp/1447275284/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aQm2eLxEXfk6epDVXQvCGRy8G4KSShpyIwf-myU4gj50-BcECbCQ_ol3zn0YY8dj4XO-zvmKv2nJYAiOS3x1MjiZz-a0jVTgeI_lQCq_Rd6pHr237B32hl-lUfrD2ULZ7v5xicCMoF2J5NewyG--y_mp6IooTRtndTIzAs4jULakQsDPMBGttnIJMZYNaQ96TncVpEp6Oj5Fp0nDgUdqe9yHp9_ys89Sxx8crof0yMA.AM-2YcmrGCvDL0MjLQ810ZriJq2kVeBHQKV6GsSYdfU&dib_tag=se&keywords=an+unquiet+mind&qid=1709477197&s=books&sr=1-1">          <img src="https://tse2.mm.bing.net/th?id=OIP.bBMlpuJ3KVCkquZSGGHZagHaLO&pid=Api&P=0&h=180" alt="" />
          </a>
          <a href="https://www.amazon.in/Happiness-Trap-2nd-Struggling-Living-ebook/dp/B098TK7QYM/ref=sr_1_2?crid=3RSKSAT5YSX8O&dib=eyJ2IjoiMSJ9._yR0B2MrnWGdrZOTp3B7RKZ86N4mT0MzwR0g-5jm67_2qPpboUXg5t2ULpH2W4E_D-jx8olQlmR6W7aiGLgtjLZ8Ike0TdLC7rY-gT39GCghMgC7Xe36Bt5-cgyvASrSkfYBAAu-spcejcpEPrUcCqjZIBfTv2S80ClqaXfYr2yHdlwVqV5SxF5eAx9mqeXkHnxf4BfEPd-sHgSLY5_VJjEmQdtf5vn43QJ10L7OO7M.H76Blm55Pb5Y0cryvoU6S_4FqwmA66ff8RS5GM7zlA8&dib_tag=se&keywords=the+happiness+trap&qid=1709477020&s=books&sprefix=the+happiness+trap%2Cstripbooks%2C579&sr=1-2">          <img src="https://tse3.mm.bing.net/th?id=OIP.9cZJhN48yh7CPJtiA7Br0wHaLp&pid=Api&P=0&h=180" alt="" />
          </a>
        </div>
      </div>
      <div className="disease">
        <div className='dise'>
          <h2>Diseases Caused by Anxiety</h2>
          <ul>
            <li>Generalized Anxiety Disorder (GAD)</li>
            <li>Panic Disorder</li>
            <li>Social Anxiety Disorder (Social Phobia)</li>
            <li>Specific Phobias</li>
            <li>Obsessive-Compulsive Disorder (OCD)</li>

            <li>Post-Traumatic Stress Disorder (PTSD)</li>
            <li>Agoraphobia</li>
            <li>Separation Anxiety Disorder</li>
            <li>Selective Mutism</li>
          </ul>

        </div>
        <div className='dise'>
          <h2>Diseases Caused by Depression</h2>

          <ul>
            <li>Major Depressive Disorder</li>
            <li>Persistent Depressive Disorder (Dysthymia)</li>
            <li>Seasonal Affective Disorder (SAD)</li>
            <li>Psychotic Depression</li>
            <li>Postpartum Depression</li>

            <li>Premenstrual Dysphoric Disorder (PMDD)</li>
            <li>Bipolar Disorder</li>
          </ul>
        </div>
        <div className='dise'>
          <h2>Diseases Caused by Stress</h2>

          <ul>
            <li>Cardiovascular diseases</li>
            <li>Immune system dysfunction</li>
            <li>Gastrointestinal issues (e.g., IBS)</li>
            <li>Respiratory problems</li>
            <li>Musculoskeletal disorders </li>
            (e.g., chronic pain, fibromyalgia)
            <li>Endocrine system disruptions</li>
            <li>Sleep disorders</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aware
