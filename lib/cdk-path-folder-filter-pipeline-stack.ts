import * as pipelines from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';


export class CdkPathFolderFilterPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Pipeline 1
    const pipeline1 = new pipelines.CodePipeline(this, 'Pipeline1', {
      selfMutation: false,
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.connection('pritika-cloudextend/cdk-path-folder-filter-pipeline', 'master',{
          connectionArn: 'arn:aws:codestar-connections:us-east-1:284659254350:connection/40a026ac-5010-4356-aaa8-9e5477d08cf6',
        }),
        
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });
  }
}
