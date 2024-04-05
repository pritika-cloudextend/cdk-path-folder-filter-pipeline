#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPathFolderFilterPipelineStack } from '../lib/cdk-path-folder-filter-pipeline-stack';

const app = new cdk.App();
new CdkPathFolderFilterPipelineStack(app, 'CdkPathFolderFilterPipelineStack', {
  env: {
    account : '284659254350' ,
    region : 'us-east-2',
  }
});
app.synth()