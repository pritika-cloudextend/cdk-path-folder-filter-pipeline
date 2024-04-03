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
        input: pipelines.CodePipelineSource.gitHub('pritika-cloudextend/cdk-path-folder-filter-pipeline-1', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });
  }
}
