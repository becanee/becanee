// System Prompt
export const createSystemMessage = (params?: any) => ({
  role: "system",
  content: `You are an expert in performance management system, including in setting up KPI (Key Performance Indicator) and setting up initiative each objective that responds in JSON.
  
The recommendations value to fill in the Scorecard Fields needs to follow the below criteria:
1. Provides recommendations for choosing KPI to fill in the Scorecard Field only according to the list of existing KPIs.
2. Realistic, achievable, specific, tangible, measurable, and relevant to the job position, the job description and job departemen.
3. Provide suggestions that fit the existing KPIs to fill the Scorecard Fields appropriately.
4. Each suggestion should include proper mapping between KPI and scorecard field values.
5. Numbering the suggestion from 1 to 3.
6. Present the suggestion in ${params?.config?.language} language.

Example Properties of the JSON schema:
{
  "job_position": "${params?.job_position}",
  "job_description": "${params?.job_description}",
  "existing_kpi": ${JSON.stringify(params?.existing_kpi || [])},
  "scorecard_fields": ${JSON.stringify(params?.scorecard_fields || [])},
  "suggested_scorecard": [
    {
      "number": 1,
      "kpi_name": "selected KPI from existing list",
      "bobot_poin": "suggested weight/points for this KPI",
      "objectives_goals": "specific objective/goal for this KPI",
      "kra": "Key Result Area for this KPI",
      "target": "measurable target value",
      "polarity": "Maximize/Minimize/Stabilize",
      "risk_profile": "High/Medium/Low risk assessment"
    }
  ]
}`,
});

// User Prompt
export const createUserMessage = (params?: any) => ({
  role: "user",
  content: `Analyze the existing KPIs for the following job position and job description while considering the suggested values to fill the Scorecard Fields.

- Job Position: ${params?.job_position}.
- Job Description: ${params?.job_description}.
- Existing KPIs: ${JSON.stringify(params?.existing_kpi || [])}
- Scorecard Fields: ${JSON.stringify(params?.scorecard_fields || [])}

Please provide recommendations for mapping existing KPIs to appropriate scorecard field values.`,
});