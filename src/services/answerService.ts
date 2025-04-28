
// This is a mock service that simulates generating answers
// In a real application, this would call an API to get answers from AI

type AnswerType = "2" | "5" | "16";

const generateBriefDefinition = (question: string): string => {
  if (question.toLowerCase().includes("newton's laws")) {
    return `
      <p>Newton's Laws of Motion are three fundamental laws that describe the relationship between a body and the forces acting upon it, and its motion in response to those forces.</p>
      <p>These laws laid the foundation for classical mechanics and are still applicable in many everyday situations.</p>
    `;
  } else if (question.toLowerCase().includes("photosynthesis")) {
    return `
      <p>Photosynthesis is the biological process by which plants convert light energy into chemical energy, using carbon dioxide and water to produce glucose and oxygen.</p>
      <p>This process is essential for maintaining life on Earth as it produces oxygen and serves as the primary energy input into the biosphere.</p>
    `;
  } else {
    return `
      <p>This is a brief definition answer for your question: "${question}"</p>
      <p>A 2-mark answer typically provides a concise definition and basic explanation of the concept.</p>
    `;
  }
};

const generateExplanationWithExample = (question: string): string => {
  if (question.toLowerCase().includes("newton's laws")) {
    return `
      <h2>Newton's Three Laws of Motion</h2>
      <p>Sir Isaac Newton's three laws of motion, published in 1687, describe the relationship between a body and the forces acting upon it:</p>
      <ol>
        <li><strong>First Law (Law of Inertia):</strong> An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction unless acted upon by an unbalanced force.</li>
        <li><strong>Second Law (F = ma):</strong> The acceleration of an object depends on the mass of the object and the amount of force applied.</li>
        <li><strong>Third Law:</strong> For every action, there is an equal and opposite reaction.</li>
      </ol>
      <div class="formula">F = ma</div>
      <p>Example: When a rocket launches, the rocket expels gas downward (action) and the gas pushes the rocket upward (reaction), demonstrating Newton's third law.</p>
    `;
  } else if (question.toLowerCase().includes("photosynthesis")) {
    return `
      <h2>Photosynthesis Process</h2>
      <p>Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy that can later be used to fuel the organism's activities.</p>
      <div class="formula">6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂</div>
      <p><strong>Key Components:</strong></p>
      <ul>
        <li>Chlorophyll - the green pigment that absorbs light</li>
        <li>Carbon dioxide - from the atmosphere</li>
        <li>Water - absorbed through roots</li>
      </ul>
      <p><strong>Example:</strong> A sunflower turning toward the sun to maximize the light absorption for photosynthesis.</p>
    `;
  } else {
    return `
      <h2>Explanation with Example</h2>
      <p>This is a 5-mark answer for your question: "${question}"</p>
      <p>A 5-mark answer typically includes:</p>
      <ul>
        <li>A comprehensive definition</li>
        <li>Key characteristics of the concept</li>
        <li>At least one relevant example</li>
        <li>Simple illustrations if applicable</li>
      </ul>
      <div class="formula">Example formula or equation</div>
      <p><strong>Example:</strong> A practical application of this concept would be seen in [example scenario].</p>
    `;
  }
};

const generateDetailedBreakdown = (question: string): string => {
  if (question.toLowerCase().includes("newton's laws")) {
    return `
      <h2>Newton's Laws of Motion: Comprehensive Analysis</h2>
      <p>Sir Isaac Newton's three laws of motion, published in his work "Philosophiæ Naturalis Principia Mathematica" in 1687, form the foundation of classical mechanics. These laws describe the relationship between the motion of an object and the forces acting on it.</p>
      
      <h3>First Law: The Law of Inertia</h3>
      <p>Newton's first law states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This property is known as inertia.</p>
      <p><strong>Mathematical Expression:</strong> If ΣF = 0, then v = constant</p>
      <p><strong>Real-world Applications:</strong></p>
      <ul>
        <li>Seat belts in vehicles protect passengers from the effects of inertia during sudden stops</li>
        <li>A tablecloth can be quickly pulled from under dishes without moving them due to inertia</li>
        <li>Objects in space continue moving without slowing down due to the absence of friction</li>
      </ul>
      
      <h3>Second Law: Force and Acceleration</h3>
      <p>The second law states that the force acting on an object is equal to the mass of that object times its acceleration. This law quantifies the first law.</p>
      <div class="formula">F = ma</div>
      <p>Where:</p>
      <ul>
        <li>F = Net force applied (measured in Newtons, N)</li>
        <li>m = Mass of the object (measured in kilograms, kg)</li>
        <li>a = Acceleration produced (measured in meters per second squared, m/s²)</li>
      </ul>
      <p><strong>Important Extensions:</strong></p>
      <p>When considering multiple forces, we use:</p>
      <div class="formula">ΣF = m × a</div>
      <p>Additionally, weight is a force resulting from gravity's acceleration:</p>
      <div class="formula">W = m × g</div>
      <p>Where g is approximately 9.8 m/s² on Earth's surface.</p>
      
      <h3>Third Law: Action and Reaction</h3>
      <p>For every action, there is an equal and opposite reaction. This means that forces always occur in pairs.</p>
      <p><strong>Key Characteristics:</strong></p>
      <ul>
        <li>Action and reaction forces are always equal in magnitude</li>
        <li>They act in opposite directions</li>
        <li>They act on different bodies</li>
      </ul>
      <p><strong>Applications:</strong></p>
      <ul>
        <li>Rocket propulsion: gases are expelled backward, propelling the rocket forward</li>
        <li>Walking: we push backward on the ground, and the ground pushes forward on us</li>
        <li>Swimming: we push water backward, and water pushes us forward</li>
      </ul>
      
      <h3>Historical Context and Impact</h3>
      <p>Newton's laws replaced the Aristotelian view of physics that had dominated scientific thought for nearly two millennia. These laws enabled:</p>
      <ul>
        <li>The Industrial Revolution through precise mechanical engineering</li>
        <li>Accurate prediction of planetary motions</li>
        <li>Development of modern transportation</li>
        <li>Foundation for Einstein's theories of relativity</li>
      </ul>
      
      <h3>Limitations of Newton's Laws</h3>
      <p>While incredibly useful, Newton's laws have some limitations:</p>
      <ul>
        <li>They break down at very high speeds (approaching the speed of light)</li>
        <li>They don't apply at quantum scales (very small particles)</li>
        <li>They require modification in extremely strong gravitational fields</li>
      </ul>
      
      <table>
        <tr>
          <th>Law</th>
          <th>Simple Statement</th>
          <th>Mathematical Form</th>
        </tr>
        <tr>
          <td>First Law</td>
          <td>Objects maintain their state of motion unless acted upon by a force</td>
          <td>If ΣF = 0, then v = constant</td>
        </tr>
        <tr>
          <td>Second Law</td>
          <td>Force equals mass times acceleration</td>
          <td>F = ma or ΣF = ma</td>
        </tr>
        <tr>
          <td>Third Law</td>
          <td>For every action, there is an equal and opposite reaction</td>
          <td>F₁₂ = -F₂₁</td>
        </tr>
      </table>
      
      <div class="conclusion">
        <p>Newton's three laws of motion represent one of the most significant contributions to physics and form the foundation of classical mechanics. Together, they provide a comprehensive framework for understanding the relationship between force and motion, enabling us to explain and predict a wide range of physical phenomena from everyday experiences to astronomical events.</p>
      </div>
    `;
  } else if (question.toLowerCase().includes("photosynthesis")) {
    return `
      <h2>Photosynthesis: Comprehensive Analysis</h2>
      <p>Photosynthesis is the fundamental biological process by which green plants, algae, and certain bacteria convert light energy into chemical energy. This process is essential for life on Earth as it produces oxygen and serves as the primary energy input into the biosphere.</p>
      
      <h3>The Overall Reaction</h3>
      <p>The general equation for photosynthesis can be represented as:</p>
      <div class="formula">6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂</div>
      <p>This equation shows that carbon dioxide and water, using light energy (primarily from the sun), are converted into glucose and oxygen.</p>
      
      <h3>The Two Main Stages of Photosynthesis</h3>
      
      <h3>1. Light-Dependent Reactions (Light Reactions)</h3>
      <p>These reactions occur in the thylakoid membranes of chloroplasts and directly depend on light energy:</p>
      <ul>
        <li><strong>Photosystem II:</strong> Light energy excites electrons in chlorophyll, which are then transferred through an electron transport chain.</li>
        <li><strong>Photolysis:</strong> Water molecules are split, releasing oxygen, protons, and electrons.</li>
        <li><strong>Electron Transport Chain:</strong> The flow of electrons creates a proton gradient across the thylakoid membrane.</li>
        <li><strong>ATP Synthesis:</strong> ATP synthase uses the proton gradient to produce ATP (adenosine triphosphate).</li>
        <li><strong>Photosystem I:</strong> Additional light absorption enables the production of NADPH.</li>
      </ul>
      <p><strong>Products:</strong> ATP, NADPH, and O₂</p>
      
      <h3>2. Light-Independent Reactions (Calvin Cycle)</h3>
      <p>These reactions occur in the stroma of chloroplasts and don't directly require light:</p>
      <ul>
        <li><strong>Carbon Fixation:</strong> The enzyme RuBisCO incorporates CO₂ into organic molecules.</li>
        <li><strong>Reduction:</strong> Using ATP and NADPH from light reactions, 3-phosphoglycerate is reduced to G3P (glyceraldehyde-3-phosphate).</li>
        <li><strong>Regeneration:</strong> Some G3P is used to regenerate RuBP (ribulose-1,5-bisphosphate) for continued carbon fixation.</li>
        <li><strong>Synthesis:</strong> The remaining G3P is used to synthesize glucose and other organic compounds.</li>
      </ul>
      <p><strong>Products:</strong> Glucose and other carbohydrates</p>
      
      <h3>Key Structures Involved in Photosynthesis</h3>
      
      <h3>Chloroplast Structure</h3>
      <p>Chloroplasts are specialized organelles where photosynthesis takes place in eukaryotes:</p>
      <ul>
        <li><strong>Outer and inner membranes:</strong> Form the boundary of the chloroplast</li>
        <li><strong>Thylakoids:</strong> Flattened disc-like membrane structures arranged in stacks called grana</li>
        <li><strong>Grana:</strong> Stacks of thylakoids where light-dependent reactions occur</li>
        <li><strong>Stroma:</strong> Fluid-filled space surrounding the thylakoids where the Calvin cycle occurs</li>
        <li><strong>Chlorophyll:</strong> Green pigment molecules embedded in thylakoid membranes</li>
      </ul>
      
      <h3>Factors Affecting Photosynthetic Rate</h3>
      <table>
        <tr>
          <th>Factor</th>
          <th>Effect on Photosynthesis</th>
          <th>Limiting Conditions</th>
        </tr>
        <tr>
          <td>Light Intensity</td>
          <td>Increases rate until light saturation point</td>
          <td>Low light or extremely high light (photoinhibition)</td>
        </tr>
        <tr>
          <td>Carbon Dioxide Concentration</td>
          <td>Increases rate until CO₂ saturation</td>
          <td>Low CO₂ levels in atmosphere (~0.04%)</td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td>Increases rate up to optimum, then decreases</td>
          <td>Too low or too high temperatures denature enzymes</td>
        </tr>
        <tr>
          <td>Water Availability</td>
          <td>Essential for photolysis</td>
          <td>Drought conditions close stomata, limiting CO₂ intake</td>
        </tr>
      </table>
      
      <h3>Ecological Importance</h3>
      <p>Photosynthesis is vital to life on Earth for several reasons:</p>
      <ul>
        <li><strong>Primary Production:</strong> Creates the energy basis for nearly all food webs</li>
        <li><strong>Atmospheric Oxygen:</strong> Produces approximately 98% of Earth's oxygen</li>
        <li><strong>Carbon Cycling:</strong> Removes CO₂ from the atmosphere, playing a crucial role in climate regulation</li>
        <li><strong>Biodiversity Support:</strong> Enables the existence of diverse ecosystems</li>
      </ul>
      
      <h3>Evolutionary Significance</h3>
      <p>The evolution of photosynthesis fundamentally transformed Earth's biosphere:</p>
      <ul>
        <li>First appeared in certain bacteria around 3.4 billion years ago</li>
        <li>Oxygen-producing photosynthesis evolved around 2.7 billion years ago</li>
        <li>Led to the Great Oxygenation Event (~2.4 billion years ago), changing Earth's atmosphere</li>
        <li>Endosymbiotic theory suggests chloroplasts originated from cyanobacteria engulfed by eukaryotic cells</li>
      </ul>
      
      <div class="conclusion">
        <p>Photosynthesis stands as one of the most important biochemical processes on Earth, converting approximately 200 billion tons of carbon into biomass annually. This remarkable process not only sustains the vast majority of life forms on our planet through primary production but also maintains atmospheric oxygen levels essential for aerobic organisms. Understanding photosynthesis is crucial for addressing contemporary challenges such as food security, renewable energy development, and climate change mitigation strategies.</p>
      </div>
    `;
  } else {
    return `
      <h2>Detailed Breakdown: ${question}</h2>
      <p>This is a comprehensive 16-mark answer that would include:</p>
      
      <h3>Introduction</h3>
      <p>A thorough introduction to the topic, establishing key concepts and historical context.</p>
      
      <h3>Core Principles</h3>
      <p>An extensive explanation of the main principles involved in the subject matter.</p>
      <ul>
        <li>Primary aspect of the concept with detailed explanations</li>
        <li>Secondary aspects with supporting evidence</li>
        <li>Relationships between different components</li>
      </ul>
      
      <h3>Mathematical Representations</h3>
      <div class="formula">Key formula or equation relevant to the topic</div>
      <p>Where each variable represents:</p>
      <ul>
        <li>Variable 1: Explanation</li>
        <li>Variable 2: Explanation</li>
      </ul>
      
      <h3>Applications and Examples</h3>
      <p>Multiple real-world examples demonstrating the practical application of the concept:</p>
      <ol>
        <li>Example 1 with detailed explanation</li>
        <li>Example 2 with analysis of outcomes</li>
        <li>Historical case study showing development</li>
      </ol>
      
      <h3>Critical Analysis</h3>
      <p>Evaluation of strengths, limitations, and competing theories or approaches.</p>
      
      <table>
        <tr>
          <th>Aspect</th>
          <th>Description</th>
          <th>Significance</th>
        </tr>
        <tr>
          <td>Component 1</td>
          <td>Detailed description</td>
          <td>Impact on overall concept</td>
        </tr>
        <tr>
          <td>Component 2</td>
          <td>Detailed description</td>
          <td>Impact on overall concept</td>
        </tr>
      </table>
      
      <div class="conclusion">
        <p>In conclusion, this comprehensive analysis demonstrates the key principles, applications, and significance of the topic. The interrelationships between various aspects have been examined, along with important historical context and future implications.</p>
      </div>
    `;
  }
};

export const generateAnswer = (question: string, markType: AnswerType): string => {
  // Add a delay to simulate API call
  switch (markType) {
    case "2":
      return generateBriefDefinition(question);
    case "5":
      return generateExplanationWithExample(question);
    case "16":
      return generateDetailedBreakdown(question);
    default:
      return generateBriefDefinition(question);
  }
};
